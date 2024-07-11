<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Criteria;
use App\Models\CriteriaInput;
use App\Models\RankInput;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class CriteriaController extends Controller
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
        $criterias = Criteria::all();
        return Inertia::render('Admin/Tables/TablePage', compact('criterias'));
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
    public function store(Request $request)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
        ]);
        Criteria::create($valid);

        // Untuk mengambil data tambahan baru
        // $ids = Criteria::query()->whereNot('id', $criteria->id)->get();

        // // Untuk menambahkan nilai yang sama penting
        // CriteriaInput::create(['kriteria_id' => $criteria->id, 'jenis' => $criteria->id]);

        // foreach ($ids as $id) {
        //     CriteriaInput::create(['kriteria_id' => $criteria->id, 'jenis' => $id->id]);
        //     CriteriaInput::create(['kriteria_id' => $id->id, 'jenis' => $criteria->id]);

        //     // RankInput::create(['criteria_id' => $criteria->id]);
        // }

        return redirect()->route('criteria.index');
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
        $criterias = Criteria::find($id);

        return Inertia::render('Admin/Form/Add', compact('criterias'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Criteria $criterion)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
        ]);

        $criterion->update($valid);

        return redirect()->route('criteria.index')->with('message', 'Data Berhasil Diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Criteria $criterion)
    {
        CriteriaInput::query()
            ->where('kriteria_id', $criterion->id)
            ->orWhere('jenis', $criterion->id)
            ->delete();

        RankInput::query()
            ->where('criteria_id', $criterion->id)
            ->delete();

        $criterion->delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
