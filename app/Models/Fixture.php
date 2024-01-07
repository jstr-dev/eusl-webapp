<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOneOrMany;
use Illuminate\Database\Eloquent\Model;

class Fixture extends Model
{
    public function season(): BelongsTo {
        return $this->belongsTo(Season::class);
    }

    public function awayTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }

    public function homeTeam(): BelongsTo {
        return $this->belongsTo(Team::class);
    }

    public function game(): HasOneOrMany {
        return $this->hasMany(Game::class);
    }
}
