<?php

namespace App\Http\Libraries;

use App\Models\GameStatistics;
use App\Models\Player;

class Statistics
{
    public function getBasicPlayerStatistics(Player $player)
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

    public function getAllTimeStatistic(Player $player, string|array $statistic): array
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
}
