<?php

namespace App\Http\Controllers;

use App\Models\FinalRank;
use App\Models\RankAmount;
use App\Repositories\RankRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RankingResultController extends Controller
{
    public function __construct()
    {
        $this->middleware('user');
    }

    public function index()
    {
        $token = session()->get('random_token')[0];
        $rank_results = FinalRank::with("Alternative", 'GoalSelect')->where('random_token', $token)
            ->latest()
            ->get();

        $ranks = [];

        foreach ($rank_results as $rank) {
            if ($rank->result != 0) {
                $ranks[] = $rank;
            }
        }

        return Inertia::render('User/User', compact('rank_results', 'ranks'));
    }
}
