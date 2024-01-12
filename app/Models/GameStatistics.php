<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class GameStatistics extends Model
{
    public function getGame(): BelongsTo {
        return $this->belongsTo(Game::class);
    }

    public function getPlayer(): BelongsTo {
        return $this->belongsTo(Player::class);
    }

    public function getTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }
}
