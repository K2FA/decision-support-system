<?php

namespace App\Http\Controllers;

use App\Models\FinalRank;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminRankResultController extends Controller
{


    public function index()
    {
        $final_rank = FinalRank::with('alternative', 'ComparisonInput.user', 'GoalSelect')->paginate(10);
        return Inertia::render("Admin/Tables/TablePage", compact('final_rank'));
    }
}
