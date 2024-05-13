<?php

namespace App\Http\Controllers;

use App\Models\ComparisonInput;
use App\Models\Criteria;
use App\Models\CriteriaInput;
use App\Models\GoalSelect;
use App\Repositories\AhpRepository;
use App\Repositories\FahpRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

use function Laravel\Prompts\error;

class InputAhpController extends Controller
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

        $readonly = DB::table('criteria_inputs')->select('id')->whereRaw('kriteria_id = jenis')->get();


        if (count($key) != $query->count()) {
            return redirect()->back()->with('failed', 'Key tidak sesuai!');
        }

        $random_token = bin2hex(random_bytes(16));

        if (session()->get('random_token')) {
            session()->forget('random_token');
        }

        session()->push('random_token', $random_token);

        DB::beginTransaction();

        try {
            $store = [];

            foreach ($readonly as $inputID) {
                $store[] = [
                    'criteria_input_id' => $inputID->id,
                    'value' => 1,
                    'random_token' => $random_token,
                    'user_id' => auth()->user()->id,
                ];
            }

            foreach ($req as $criteria_id => $bobot) {
                $store[] = [
                    'criteria_input_id' => $criteria_id,
                    'value' => $bobot,
                    'random_token' => $random_token,
                    'user_id' => auth()->user()->id,
                ];
            }

            ComparisonInput::insert($store);

            $status = true;

            DB::commit();

            // Calculation Algorithm
            AhpRepository::Calculate();


            return redirect('user/hasil-ahp')->with('success', 'Data Berhasil Dibuat!');
        } catch (\Throwable $th) {
            DB::rollBack();
            return redirect()->back()->with('failed', 'Data Gagal Dibuat!');
        }
    }
}
