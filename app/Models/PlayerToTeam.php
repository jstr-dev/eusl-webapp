<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class PlayerToTeam extends Model
{
    protected $table = "player_to_team";

    public function getTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }

    public function getPlayer(): BelongsTo {
        return $this->belongsTo(Player::class);
    }
}
