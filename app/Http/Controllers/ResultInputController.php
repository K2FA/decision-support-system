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
    public function __construct(Request $request)
    {
        $this->middleware('user');
    }

    public function index()
    {
        $token = session()->get('random_token')[0];
        $consistency_ratio = ConsistencyRatio::where('random_token', $token)->get();
        if ($consistency_ratio->first()->result > 0.1) {
            Anhipro::where('random_token', $token)->delete();
            PairwiseComparison::where('random_token', $token)->delete();
            PriorityWeight::where('random_token', $token)->delete();
            MultiplicationMatrix::where('random_token', $token)->delete();
            DevidePw::where('random_token', $token)->delete();
        }

        return Inertia::render('User/User', compact('consistency_ratio'));
    }
}
