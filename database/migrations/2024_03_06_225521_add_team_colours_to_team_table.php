<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->string('home_primary_color', 6)->default('E62129');
            $table->string('home_secondary_color', 6)->default('E62129');
            $table->string('away_primary_color', 6)->default('E62129');
            $table->string('away_secondary_color', 6)->default('E62129');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('teams', function (Blueprint $table) {
            $table->dropColumn(['home_primary_color', 'home_secondary_color', 'away_primary_color', 'away_secondary_color']);
        });
    }
};
