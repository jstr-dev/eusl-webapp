<?php

namespace App\Http\Controllers;

use App\Http\Traits\FilterParameters;
use App\Models\Season;
use App\Models\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Inertia\Inertia;
use Inertia\Response;

class TeamController extends Controller
{
    use FilterParameters;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        [$page, $per_page, $search] = $this->getPaginationParameters($request);
        [$seasons, $current_season, $current_division, $season_id] = $this->getSeasonParameters($request);
        $teams = Team::query();

        if ($search) {
            $teams = $teams->where('name', 'like', '%' . $search . '%');
            $total = $teams->count();
            $teams = $teams->skip(($page - 1) * $per_page)->take($per_page)->select(['id', 'name', 'short'])->get();
        } else {
            $teams = $teams->join('player_to_team', 'player_to_team.team_id', '=', 'teams.id')
                ->where('player_to_team.season_id', '=', $season_id)
                ->groupBy('player_to_team.team_id')
                ->select(['team_id', 'name', 'short'])->get();
            $total = $teams->count();
        }

        return Inertia::render("Team/Index", [
            'teams' => $teams,
            'seasons' => $seasons,
            'current_season' => $current_season,
            'current_division' => $current_division,
            'page' => $page,
            'total' => $total,
            'max_pages' => ceil($total / $per_page),
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
            'team' => $team,
        ]);
    }
}
