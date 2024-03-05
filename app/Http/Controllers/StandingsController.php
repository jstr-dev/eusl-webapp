<?php

namespace App\Http\Controllers;

use App\Http\Traits\FilterParameters;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class StandingsController extends Controller
{
    use FilterParameters;

    public function index(Request $request)
    {
        [$seasons, $current_season, $current_division, $season_id] = $this->getSeasonParameters($request);
        $standings = $this->getStandings($season_id);

        return Inertia::render("Standings/Index", [
            'seasons' => $seasons,
            'current_season' => $current_season,
            'current_division' => $current_division,
            'standings' => $standings,
        ]);
    }

    private function getStandings(int $season_id): array
    {
        return Cache::rememberForever('standings_' . $season_id, fn () => DB::select("
            SELECT team_id, team_name, games, (wins * 3 + ot_wins * 2 + ot_losses * 1) AS points, wins, ot_wins, ot_losses, losses, forfeits, goals_for, goals_against, (goals_for - goals_against) AS goal_difference
            FROM (
                SELECT team.id as team_id, 
                team.name as team_name,
                COUNT(fixture.id) as games, 
                COUNT(IF(result.winner_id = team.id AND result.is_overtime = 0, 1, NULL)) AS wins,
                COUNT(IF(result.winner_id = team.id AND result.is_overtime = 1, 1, NULL)) AS ot_wins,
                COUNT(IF(result.winner_id != team.id AND result.is_overtime = 1, 1, NULL)) AS ot_losses,
                COUNT(IF(result.winner_id != team.id AND result.is_overtime = 0, 1, NULL)) AS losses,
                COUNT(IF(result.winner_id != team.id AND result.is_forfeit = 1, 1, NULL)) AS forfeits,
                SUM(IF(fixture.home_team_id = team.id, result.home_score, result.away_score)) AS goals_for,
                SUM(IF(fixture.home_team_id != team.id, result.home_score, result.away_score)) AS goals_against
                FROM teams team
                INNER JOIN fixtures fixture ON fixture.home_team_id = team.id OR fixture.away_team_id = team.id
                INNER JOIN games result ON fixture.id = result.fixture_id
                INNER JOIN seasons season ON fixture.season_id = season.id
                WHERE season.id = $season_id AND fixture.is_series = 0
                GROUP BY team.id
            ) tbl
            ORDER BY points DESC, games, forfeits, (wins + ot_wins) DESC, wins DESC, goal_difference DESC, goals_for DESC
        "));
    }
}
