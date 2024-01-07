<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class GameStatistics extends Model
{
    public function game(): BelongsTo {
        return $this->belongsTo(Game::class);
    }

    public function player(): BelongsTo {
        return $this->belongsTo(Player::class);
    }

    public function team(): BelongsTo {
        return $this->belongsTo(Team::class);
    }
}
