<?php

namespace App\Http\Controllers;

use App\Models\FinalRank;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRankResultController extends Controller
{
    public function __construct()
    {
        $this->middleware('admin');
    }


    public function index()
    {
        $final_rank = FinalRank::with('alternative', 'ComparisonInput.user', 'GoalSelect')
            ->orderBy('comparison_input_id', 'desc')
            ->paginate(10);
        return Inertia::render("Admin/Tables/TablePage", compact('final_rank'));
    }
}
