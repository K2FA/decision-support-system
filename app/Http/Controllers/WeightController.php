<?php

namespace App\Http\Controllers;

use App\Models\FullWash;
use App\Models\Honey;
use App\Models\Natural;
use App\Models\Weight;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeightController extends Controller
{
    public function index()
    {   
        $naturals = Natural::with('criteria')->get();
        $full_washes = FullWash::with('criteria')->get();
        $honeys = Honey::with('criteria')->get();

        // $weights = Weight::with('natural','fullwash', 'honey')->get();
        // dd($weights);
        return Inertia::render('Admin/Tables/TablePage', compact( 'naturals', 'full_washes', 'honeys'));
    }
}
