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
        Schema::create('fixtures', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('home_team_id')->unsigned();
            $table->bigInteger('away_team_id')->unsigned();
            $table->bigInteger('season_id')->unsigned();
            $table->integer('gameweek')->unsigned()->nullable();
            $table->tinyInteger('is_series')->unsigned()->default(0);
            $table->enum('series_type', ['Quarter Finals', 'Semi Finals', 'Finals'])->nullable();
            $table->integer('series_number')->unsigned()->nullable();
            
            // FK & Constraints
            $table->foreign('home_team_id')->references('id')->on('teams');
            $table->foreign('away_team_id')->references('id')->on('teams');
            $table->foreign('season_id')->references('id')->on('seasons');
            $table->unique(['home_team_id', 'away_team_id', 'is_series', 'season_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('fixtures');
    }
};
