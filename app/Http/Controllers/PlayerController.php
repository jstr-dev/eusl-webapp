<?php

namespace App\Http\Controllers;

use App\Http\Libraries\Statistics;
use App\Http\Traits\FilterParameters;
use App\Models\Player;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerController extends Controller
{
    use FilterParameters;

    public function index(Request $request)
    {
        [$page, $per_page, $search] = $this->getPaginationParameters($request);
        [$seasons, $current_season, $current_division, $season_id] = $this->getSeasonParameters($request);
        $players = Player::query();

        if ($search) {
            $players = $players->withWhereHas('teams', function ($query) {
                $query->orderBy('season_id', 'desc');
            })->where('name', 'like', '%' . $search . '%');
        } else {
            $players = $players->withWhereHas('teams', function ($query) use ($season_id) {
                $query->where('season_id', '=', $season_id);
            });
        }

        $total = $players->count();
        $players = $players->skip(($page - 1) * $per_page)->take($per_page)->get();

        return Inertia::render("Player/Index", [
            'players' => $players,
            'seasons' => $seasons,
            'current_season' => $current_season,
            'current_division' => $current_division,
            'page' => $page,
            'total' => $total,
            'search' => $search,
            'max_pages' => ceil($total / $per_page),
        ]);
    }

    public function show(Player $player, Statistics $statistics)
    {
        $teams = $player->playerToTeams;
        $teams->load('team');
        $teams->load('season');
        $current_team = $player->currentTeam();

        return Inertia::render("Player/Show", [
            'player' => $player,
            'current_team' => $current_team,
            'initialStatistics' => $statistics->getBasicPlayerStatistics($player),
            'placements' => $statistics->getSeasonFinishes($player),
            'teams' => $teams
        ]);
    }
}
