<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Game extends Model
{
    public function fixture(): BelongsTo
    {
        return $this->belongsTo(Fixture::class);
    }

    public function statistics(): HasMany
    {
        return $this->hasMany(GameStatistics::class);
    }

    public function winner(): BelongsTo
    {
        return $this->belongsTo(Team::class, 'winner_id');
    }
}
