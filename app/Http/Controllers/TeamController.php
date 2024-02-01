<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Inertia\Inertia;
use Illuminate\Http\Request;

class TeamController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    { 
        return Inertia::render("Team/Index", [
            'teams' => Team::all()
        ]);
    }
    
    /**
     * Display the specified resource.
     */
    public function show(Team $team)
    {
        return $team;
    }
}
