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

        $cek = Anhipro::all();
        $cek2 = PairwiseComparison::all();
        $cek3 = PriorityWeight::all();
        $cek4 = MultiplicationMatrix::all();
        $cek5 = DevidePw::all();
        $cek6 = ConsistencyRatio::all();

        dd($cek6);

        return Inertia::render('User/User', compact('cek6'));
    }

    public function store(Request $request)
    {
        AhpRepository::Calculate();

        return redirect()->back()->with('success', 'Data Berhasil Dibuat!');
    }
}
