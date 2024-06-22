<?php

namespace App\Http\Controllers;

use App\Http\Libraries\Statistics;
use App\Http\Traits\FilterParameters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StandingsController extends Controller
{
    use FilterParameters;

    public function index(Request $request, Statistics $statistics)
    {
        [$seasons, $current_season, $current_division, $season_id] = $this->getSeasonParameters($request);
        $standings = $statistics->getStandings($season_id);

        return Inertia::render("Standings/Index", [
            'seasons' => $seasons,
            'current_season' => $current_season,
            'current_division' => $current_division,
            'standings' => $standings,
        ]);
    }
}
