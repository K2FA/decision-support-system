<?php

namespace App\Http\Controllers;

use App\Models\Anhipro;
use App\Models\ComparisonInput;
use App\Models\ConsistencyRatio;
use App\Models\DevidePw;
use App\Models\GoalSelect;
use App\Models\MultiplicationMatrix;
use App\Models\PairwiseComparison;
use App\Models\PriorityWeight;
use App\Repositories\AhpRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ResultInputController extends Controller
{
    public function index()
    {
        $consistency_ratio = ConsistencyRatio::all();

        return Inertia::render('User/User', compact('consistency_ratio'));
    }
}
