<?php

namespace App\Http\Controllers;

use App\Helper\AuthCheck;
use App\Models\Goal;
use Illuminate\Http\Request;
use Inertia\Inertia;

use function Termwind\render;

class GoalController extends Controller
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
        $goals = Goal::all();

        return Inertia::render('Admin/Tables/TablePage', compact('goals'));
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
            'name' => ['required', 'string']
        ]);

        Goal::create($valid);
        return redirect()->route('goal.index');
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
    public function edit(Goal $goal, Request $request)
    {
        $goals = $goal->find($request->id);
        return Inertia::render('Admin/Form/Add', compact('goals'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Goal $goal)
    {
        $valid = $request->validate([
            'name' => ['required', 'string'],
        ]);

        $goal->update($valid);
        return redirect()->route('goal.index')->with('message', 'Data Berhasil Diperbarui');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Goal $goal)
    {
        $goal->delete();
        return redirect()->back()->with('message', 'Data Berhasil Dihapus');
    }
}
