<?php

use App\Http\Controllers\PlayerController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\FixtureController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StandingsController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/*Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});*/

Route::get("/", function () {
    return Inertia::render("Index");
})->name('home');

// Teams
Route::controller(TeamController::class)->group(function () {
    Route::get('teams', 'index')->name('teams');
    Route::get('team/{team}', 'show')->whereNumber('team');
});

// Players
Route::controller(PlayerController::class)->group(function () {
    Route::get('players', 'index')->name('players');
    Route::get('player/{player}', 'show')->whereNumber('player');
});

// Fixtures
Route::controller(FixtureController::class)->group(function () {
    Route::get('fixtures', 'index')->name('fixtures');
    Route::get('fixture/{fixture}', 'show')->whereNumber('fixture');
});

Route::get('/standings', [StandingsController::class, 'index'])->name('standings');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
