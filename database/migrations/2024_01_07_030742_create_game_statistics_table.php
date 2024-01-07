<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('game_statistics', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('game_id')->unsigned();
            $table->bigInteger('player_id')->unsigned();
            $table->bigInteger('team_id')->unsigned();
            $table->integer('score')->unsigned();
            $table->integer('goals')->unsigned();
            $table->integer('primary_assists')->unsigned();
            $table->integer('secondary_assists')->unsigned();
            $table->integer('shots')->unsigned();
            $table->integer('saves')->unsigned();
            $table->integer('passes')->unsigned();
            $table->integer('blocks')->unsigned();
            $table->integer('post_hits')->unsigned();
            $table->integer('takeaways')->unsigned();
            $table->integer('turnovers')->unsigned();
            $table->integer('possession')->unsigned();
            $table->integer('faceoff_wins')->unsigned();
            $table->integer('faceoff_losses')->unsigned();
            $table->integer('period_wins')->unsigned();
            $table->integer('period_losses')->unsigned();
            $table->integer('period_ties')->unsigned();
            $table->integer('shutout_for')->unsigned();
            $table->integer('shutout_against')->unsigned();
            $table->integer('goals_for')->unsigned();
            $table->integer('goals_against')->unsigned();
            $table->integer('game_winning_goals')->unsigned();
            $table->tinyInteger('is_substitute')->unsigned()->default(0);

            // FK & Constraints
            $table->foreign('game_id')->references('id')->on('games');
            $table->foreign('player_id')->references('id')->on('players');
            $table->foreign('team_id')->references('id')->on('teams');
            $table->unique(['player_id', 'game_id']);
        });        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('game_statistics');
    }
};
