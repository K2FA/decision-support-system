<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\FullWash;
use App\Models\Honey;
use App\Models\Natural;
use App\Models\Weight;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WeightController extends Controller
{
    // public function __construct(Request $request)
    // {
    //     $check = AuthCheck::adminCheck($request); 

    //     if(!blank($check)) {return to_route($check);}
    // }

    public function index()
    {
        $naturals = Natural::with('criteria')->get()->groupBy('criteria_id');
        $full_washes = FullWash::with('criteria')->get()->groupBy('criteria_id');
        $honeys = Honey::with('criteria')->get()->groupBy('criteria_id');

        // $weights = Weight::with('natural','fullwash', 'honey')->get();
        // dd($naturals);
        return Inertia::render('Admin/Tables/TablePage', compact('naturals', 'full_washes', 'honeys'));
    }
}
