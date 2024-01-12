<?php

namespace App\Http\Controllers;

use App\Models\Fixture;
use Illuminate\Http\Request;

class FixtureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Fixture::all();
    }

    /**
     * Display the specified resource.
     */
    public function show(Fixture $fixture)
    {
        return $fixture->getGames()->first();
    }
}
