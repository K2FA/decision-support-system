<?php

namespace App\Http\Controllers;

use App\Models\Alternative;
use App\Models\Criteria;
use App\Models\FullWash;
use App\Models\Goal;
use App\Models\GoalSelect;
use App\Models\Honey;
use App\Models\Natural;
use App\Models\RankInput;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RankController extends Controller
{

    public function __construct(Request $request)
    {
        $this->middleware('user');
    }

    public function index()
    {
        $criterias = Criteria::all();
        $alternatives = Alternative::all();
        $rankInputs = RankInput::with('criteria', 'alternative')->get()->groupBy('alternative_id');

        $token = session()->get('random_token')[0];
        $goal_selects = GoalSelect::where('random_token', $token)->get();

        $goals = Goal::all();

        // dd($goal_selects);

        $naturals = Natural::with('criteria')->get()->groupBy('criteria_id');
        $full_washes = FullWash::with('criteria')->get()->groupBy('criteria_id');
        $honeys = Honey::with('criteria')->get()->groupBy('criteria_id');

        $information = collect();

        foreach ($goal_selects as $goal_select) {
            foreach ($goals as $goal) {
                if ($goal_select->choice == $goal->name) {
                    if ($goal_select->choice == 'Natural' && $goal->name == 'Natural') {
                        $information = $naturals;
                    } else if ($goal_select->choice == 'Full Wash' && $goal->name == 'Full Wash') {
                        $information = $full_washes;
                    } else if ($goal_select->choice == 'Honey' && $goal->name == 'Honey') {
                        $information = $honeys;
                    }
                }
            }
        }



        return Inertia::render(
            'User/User',
            compact(
                'rankInputs',
                'criterias',
                'alternatives',
                'goal_selects',
                'goals',
                'information'
            )
        );
    }
}
