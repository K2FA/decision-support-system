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
    public function __construct(Request $request)
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $naturals = Natural::with('criteria')->get()->groupBy('criteria_id');
        $full_washes = FullWash::with('criteria')->get()->groupBy('criteria_id');
        $honeys = Honey::with('criteria')->get()->groupBy('criteria_id');

        // $merged = array_merge_recursive($naturals, $full_washes, $honeys);
        // dd($naturals);

        // $weights = Weight::with('natural','fullwash', 'honey')->get();
        return Inertia::render('Admin/Tables/TablePage', compact('naturals', 'full_washes', 'honeys'));
    }
}
