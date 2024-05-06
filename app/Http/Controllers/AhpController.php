<?php

namespace App\Http\Controllers;

use App\Models\ComparisonInput;
use App\Models\Criteria;
use App\Models\CriteriaInput;
use App\Models\GoalSelect;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function Laravel\Prompts\error;

class AhpController extends Controller
{

    public function selectGoal()
    {
        $goalSelects = GoalSelect::with('Goal')->get();
        return Inertia::render('User/User', compact('goalSelects'));
    }

    public function index(Request $request)
    {
        $criterias = Criteria::all();
        $criteria_input = CriteriaInput::with('Criteria')->get()->groupBy('kriteria_id');

        return Inertia::render('User/User', compact(
            'criterias',
            'criteria_input',
        ));
    }

    public function store(Request $request)
    {

        $status = false;
        $req = $request->all();
        $key = array_keys($req);

        $query = CriteriaInput::whereIn('id', $key)->get();

        if (count($key) != $query->count()) {
            return redirect()->back()->with('failed', 'Key tidak sesuai!');
        }

        $random_token = bin2hex(random_bytes(16));

        DB::beginTransaction();

        try {
            $store = [];

            foreach ($req as $index => $bobot) {
                $store[] = [
                    'criteria_input_id' => $index,
                    'value' => $bobot,
                    'random_token' => $random_token,
                    'user_id' => auth()->user()->id,
                ];
            }

            ComparisonInput::insert($store);

            $status = true;

            DB::commit();
            return redirect()->back()->with('success', 'Data Berhasil Dibuat!');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->with('failed', 'Data Gagal Dibuat!');
        }

        // return $status ? to_route('perhitungan.index')->with('message', 'Data Berhasil Dibuat!') : to_route('perhitungan.index')->with('failed', 'Data Gagal Dibuat!');

    }
}
