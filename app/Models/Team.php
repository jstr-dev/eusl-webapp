<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    public function playerToTeam()
    {
        return $this->belongsToMany(PlayerToTeam::class, 'teams', 'id', 'id', 'team_id');
    }
}
