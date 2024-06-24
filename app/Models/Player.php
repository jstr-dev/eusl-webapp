<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Player extends Model
{
    protected $fillable = ['name', 'slapshot_id'];

    public function teams(): BelongsToMany
    {
        return $this->belongsToMany(Team::class, 'player_to_team', 'player_id', 'team_id');
    }

    public function currentTeam(): Team
    {
        $teams = $this->playerToTeams;
        $teams = $teams->sort(function ($a, $b) {
            return $b->season->number - $a->season->number;
        });

        return $teams->first()->team ?? null;
    }

    public function playerToTeams(): HasMany
    {
        return $this->hasMany(PlayerToTeam::class, 'player_id', 'id');
    }

    private function getFirstLastGame(string $sortOrder): Game
    {
        return Game::query()
            ->join('game_statistics', 'game_statistics.game_id', '=', 'games.id')
            ->join('fixtures', 'fixtures.id', '=', 'games.fixture_id')
            ->join('seasons', 'seasons.id', '=', 'fixtures.season_id')
            ->orderBy('seasons.number', $sortOrder)
            ->orderBy('fixtures.gameweek', $sortOrder)
            ->orderBy('fixtures.id', $sortOrder)
            ->where('game_statistics.player_id', '=', $this->id)
            ->first();
    }

    public function getFirstGame(): Game
    {
        return $this->getFirstLastGame('asc');
    }

    public function getLastGame(): Game
    {
        return $this->getFirstLastGame('desc');
    }
}
