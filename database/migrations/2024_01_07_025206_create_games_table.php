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
        Schema::create('games', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('fixture_id')->unsigned();
            $table->dateTime('date_played')->nullable();
            $table->tinyInteger('is_overtime')->unsigned()->default(0);
            $table->tinyInteger('is_forfeit')->unsigned()->default(0);
            $table->bigInteger('winner_id')->unsigned()->nullable();
            $table->integer('home_score')->unsigned();
            $table->integer('away_score')->unsigned();
            $table->integer('periods_played')->unsigned();
            $table->integer('game_number')->unsigned()->nullable();

            // FK & Constraints
            $table->foreign('fixture_id')->references('id')->on('fixtures');
            $table->foreign('winner_id')->references('id')->on('teams');
            $table->unique(['fixture_id', 'game_number']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('games');
    }
};
