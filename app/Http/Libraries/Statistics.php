<?php

namespace App\Http\Libraries;

use App\Models\GameStatistics;
use App\Models\Player;
use Cache;
use DB;

class Statistics
{
    public function getBasicPlayerStatistics(Player &$player)
    {
        $firstGame = $player->getFirstGame();
        $firstSeason = $firstGame->fixture->season;
        $lastGame = $player->getLastGame();
        $lastSeason = $lastGame->fixture->season;

        $allTimeStatistics = $this->getAllTimeStatistic($player, [
            'goals',
            'primary_assists',
            'secondary_assists',
            'saves',
            'period_wins',
            'period_losses',
            'period_ties',
        ]);

        $allTimeStatistics['assists'] = $allTimeStatistics['primary_assists'] + $allTimeStatistics['secondary_assists'];
        $allTimeStatistics['periods'] = $allTimeStatistics['period_wins'] + $allTimeStatistics['period_losses'] + $allTimeStatistics['period_ties'];
        $allTimeStatistics['points'] = $allTimeStatistics['goals'] + $allTimeStatistics['assists'];

        return compact('firstGame', 'firstSeason', 'lastGame', 'lastSeason', 'allTimeStatistics');
    }

    public function getAllTimeStatistic(Player &$player, string|array $statistic): array
    {
        if (gettype($statistic) !== 'array') {
            $statistic = [$statistic];
        }

        $queryBuilder = GameStatistics::query()->where('player_id', '=', $player->id);
        foreach ($statistic as $stat) {
            $queryBuilder = $queryBuilder->selectRaw('sum(' . $stat . ') as ' . $stat);
        }

        return $queryBuilder->first()->toArray();
    }

    public function getSeasonFinishes(Player &$player): array
    {
        $seasons = $player->playerToTeams;
        $seasonFinishes = [];

        foreach ($seasons as $season) {
            $standings = $this->getStandings($season->season->id);
            $i = 0;

            foreach ($standings as $team) {
                $i++;

                if ($team->team_id == $season->team->id) {
                    $seasonFinishes[$season->season->id] = $i;
                    break;
                }
            }
        }

        return $seasonFinishes;
    }

    public function getStandings(int $season_id): array
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
