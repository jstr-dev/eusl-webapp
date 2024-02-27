<?php

namespace App\Http\Controllers;

use App\Http\Traits\PaginationTrait;
use App\Models\Player;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PlayerController extends Controller
{
    use PaginationTrait;

    public function index(Request $request)
    {
        [$page, $per_page, $seasons, $current_season, $current_division, $season_id, $search] = $this->getPaginationParameters($request);
        $players = Player::query();

        if ($search) {
            $players = $players->where('name', 'like', '%' . $search . '%')->withWhereHas('teams', function($query) {
                $query->limit(1);
                $query->orderBy('season_id', 'desc');
            });
        } else {
            $players = $players->withWhereHas('teams', function($query) use ($season_id) {
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
            'max_pages' => ceil($total / $per_page)
        ]);
    }
}
