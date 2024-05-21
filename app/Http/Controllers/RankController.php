<?php

namespace App\Http\Controllers;

use App\Models\Alternative;
use App\Models\Criteria;
use App\Models\RankInput;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RankController extends Controller
{

    public function index()
    {
        $criterias = Criteria::all();
        $alternatives = Alternative::all();
        $rankInputs = RankInput::with('criteria', 'alternative')->get()->groupBy('alternative_id');

        return Inertia::render(
            'User/User',
            compact(
                'rankInputs',
                'criterias',
                'alternatives'
            )
        );
    }
}
