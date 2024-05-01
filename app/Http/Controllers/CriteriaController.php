<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Criteria;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class CriteriaController extends Controller
{
    // public function __construct(Request $request)
    // {
    //     $check = AuthCheck::adminCheck($request); 

    //     if(!blank($check)) {return to_route($check);}
    // }
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
            'code' => ['required', 'string']
        ]);
        Criteria::create($valid);
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
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Criteria $criterion)
    {
        $criterion -> delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
