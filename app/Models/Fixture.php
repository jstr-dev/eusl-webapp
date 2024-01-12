<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Database\Eloquent\Model;

class Fixture extends Model
{
    public function getSeason(): BelongsTo {
        return $this->belongsTo(Season::class);
    }

    public function getAwayTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }

    public function getHomeTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }

    public function getGames(): HasOneOrMany {
        return $this->hasMany(Game::class);
    }
}
