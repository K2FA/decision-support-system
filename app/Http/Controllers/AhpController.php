<?php

namespace App\Http\Controllers;

use App\Models\Criteria;
use App\Models\CriteriaInput;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AhpController extends Controller
{
    public function index()
    {
        $criterias = Criteria::all();
        $criteria_input = CriteriaInput::all()->groupBy('kriteria_id');

        return Inertia::render('User/User', compact(
            'criterias',
            'criteria_input',
        ));
    }
}
