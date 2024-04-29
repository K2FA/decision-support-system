<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Alternative;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AlternativeController extends Controller
{
    public function __construct(Request $request)
    {
        $check = AuthCheck::adminCheck($request); 

        if(!blank($check)) {return to_route($check);}
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
    public function store(Request $request)
    {
        $valid =  $request->validate([
            'name' => ['required', 'string'],
            'code' => ['required', 'string']
        ]);

        Alternative::create($valid);
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
    public function destroy(Alternative $alternative)
    {
        $alternative -> delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
