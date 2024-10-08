<?php

namespace App\Http\Controllers;

use App\Models\Criteria;
use App\Models\TfnInput;
use App\Models\VektorNormalization;
use App\Repositories\FahpRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FahpController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('user');
    }

    public function index()
    {
        FahpRepository::Calculate();

        $criterias = Criteria::all();

        $token = session()->get('random_token')[0];
        $normalization_fuzzy = VektorNormalization::where('random_token', $token)
            ->latest()
            ->take(5)
            ->get();

        return Inertia::render('User/User', compact('normalization_fuzzy', 'criterias'));
    }
}
