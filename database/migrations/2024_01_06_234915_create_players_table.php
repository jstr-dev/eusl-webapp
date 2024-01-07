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
        Schema::create('players', function (Blueprint $table) {
            $table->id();
            $table->integer('slapshot_id')->unsigned();
            $table->string('name');

            /* PUG Stats
            $table->integer('elo')->unsigned()->default(800);
            $table->integer('forward_skill')->unsigned()->default(0);
            $table->integer('midfield_skill')->unsigned()->default(0);
            $table->integer('defender_skill')->unsigned()->default(0);
            $table->integer('goalkeeper_skill')->unsigned()->default(0);
            $table->integer('max_elo')->unsigned()->default(800);
            $table->integer('max_forward_skill')->unsigned()->default(0);
            $table->integer('max_midfield_skill')->unsigned()->default(0);
            $table->integer('max_defender_skill')->unsigned()->default(0);
            $table->integer('max_goalkeeper_skill')->unsigned()->default(0);*/

            $table->unique('slapshot_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('players');
    }
};
