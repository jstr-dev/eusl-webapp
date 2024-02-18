<?php

namespace App\Http\Controllers;

use App\Models\Season;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $page = (int) $request->get('page', 1);
        $per_page = (int) $request->get('per_page', 15);

        $seasons = Cache::remember('seasons', 3600, fn () => (Season::query()->orderBy('number', 'desc')->orderBy('division')->get()));
        $current_season = (int) $request->get('season', $seasons[0]?->number);
        $current_division = (int) $request->get('division', 1);
        $season_id = Season::where('number', $current_season)->where('division', $current_division)->pluck('id')->first();

        $search = $request->get('search');

        $query = Team::query();
        if ($search) {
            $query->where('name', 'like', '%' . $search . '%')->skip(($page - 1) * $per_page)->take($per_page);
        } else {
            $query->join('player_to_team', 'player_to_team.team_id', '=', 'teams.id')
                ->where('player_to_team.season_id', '=', $season_id)
                ->groupBy('player_to_team.team_id')
                ->select(['team_id', 'name', 'short']);
        }

        $teams = $query->get();

        return Inertia::render("Team/Index", [
            'teams' => $teams,
            'seasons' => $seasons,
            'current_season' => $current_season,
            'current_division' => $current_division
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param Team $team
     * @return Response
     */
    public function show(Team $team)
    {
        return Inertia::render("Team/Show", [
            'team' => $team
        ]);
    }
}
