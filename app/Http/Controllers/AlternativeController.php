<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Alternative;
use App\Models\Criteria;
use App\Models\RankInput;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class AlternativeController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('admin');
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $alternatives = Alternative::all();
        return Inertia::render('Admin/Tables/TablePage', compact('alternatives'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Form/Add');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Alternative $alternative)
    {
        $valid =  $request->validate([
            'name' => ['required', 'string'],
        ]);

        $alt = Alternative::create($valid);

        $crits = Criteria::all();

        // RankInput::create(['criteria_id' => $criteria->id, 'alternative_id' => $alternative->id]);

        foreach ($crits as $crit) {
            RankInput::create(['criteria_id' => $crit->id, 'alternative_id' => $alt->id]);
        }

        return redirect()->route('alternative.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $alternatives = Alternative::find($id);
        return Inertia::render('Admin/Form/Add', compact('alternatives'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Alternative $alternative)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
        ]);

        $alternative->update($valid);
        return redirect()->route('alternative.index')->with('message', 'Data Berhasil Diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Alternative $alternative)
    {
        RankInput::query()
            ->where('alternative_id', $alternative->id)
            ->delete();

        $alternative->delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
