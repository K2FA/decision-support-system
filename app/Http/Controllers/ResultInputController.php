<?php

namespace App\Http\Controllers;

use App\Models\Anhipro;
use App\Models\ComparisonInput;
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
        $comparisons = ComparisonInput::all();
        $pairwise = AhpRepository::Calculate();
        $cek = Anhipro::all();
        $cek2 = PairwiseComparison::all();
        $cek3 = PriorityWeight::all();
        $cek4 = MultiplicationMatrix::all();
        dd($cek4);

        return Inertia::render('User/User', compact('comparisons'));
    }

    public function store(Request $request)
    {

        return redirect()->back()->with('success', 'Data Berhasil Dibuat!');
    }
}
