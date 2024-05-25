<?php

namespace App\Http\Controllers;

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

        return Inertia::render('User/User');
    }
}
