<?php

namespace App\Http\Controllers;

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
        $rank_repo = RankRepository::calculate();

        return Inertia::render('User/User', compact('rank_repo'));
    }
}
