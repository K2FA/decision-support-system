<?php

namespace App\Http\Controllers;

use App\Models\Criteria;
use App\Models\CriteriaInput;
use App\Models\GoalSelect;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AhpController extends Controller
{

    public function selectGoal()
    {
        $goalSelects = GoalSelect::with('Goal')->get();
        return Inertia::render('User/User', compact('goalSelects'));
    }

    public function index(Request $request)
    {
        $criterias = Criteria::all();
        $criteria_input = CriteriaInput::with('Criteria')->get()->groupBy('kriteria_id');

        return Inertia::render('User/User', compact(
            'criterias',
            'criteria_input',
        ));
    }

    public function store(Request $request)
    {
        dd($request->all());
    }
}
