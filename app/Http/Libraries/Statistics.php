<?php

namespace App\Http\Libraries;

use App\Models\Game;
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

        return compact('firstGame', 'firstSeason', 'lastGame', 'lastSeason');
    }
}
