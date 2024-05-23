<?php

namespace App\Http\Controllers;

use App\Models\Goal;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GoalSelectController extends Controller
{

    public function index()
    {
        $goalSelects = Goal::all();
        return Inertia::render('User/User', compact('goalSelects'));
    }

    public function store()
    {
    }
}
