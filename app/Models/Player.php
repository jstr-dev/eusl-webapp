<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Player extends Model
{
    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'player_to_team', 'player_id', 'team_id');
    }

    public function currentTeam(): Team
    {
        return $this->teams()->orderBy('season_id')->first();
    }
}
