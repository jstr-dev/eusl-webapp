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
    public function index(Request $request)
    { 
        $page = 1;
        $perPage = 10;

        if ($request->has("page") && ctype_digit($request->page)) {
            $page = (int) $request->page;
        }

        return Inertia::render("Team/Index", [
            'teams' => Team::skip(($page - 1) * $perPage)->take($perPage)->get()
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
