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
        Schema::create('player_to_team', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('player_id')->unsigned();
            $table->bigInteger('team_id')->unsigned();
            $table->bigInteger('season_id')->unsigned();
            $table->tinyInteger('is_gm')->unsigned();
            $table->enum('position', ['Forward', 'Midfielder', 'Defender', 'Goalkeeper'])->nullable();

            // FK and Constraints
            $table->foreign('player_id')->references('id')->on('players');
            $table->foreign('team_id')->references('id')->on('teams');
            $table->foreign('season_id')->references('id')->on('seasons');
            $table->unique(['player_id', 'team_id', 'season_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('player_to_team');
    }
};
