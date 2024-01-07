<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    public function fixture(): BelongsTo {
        return $this->belongsTo(Fixture::class);
    }

    public function winner(): BelongsTo {
        return $this->belongsTo(Team::class, 'winner_id');
    }
}
