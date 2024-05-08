<?php

namespace App\Http\Controllers;

use App\Models\GoalSelect;
use App\Repositories\AhpRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HasilAhpController extends Controller
{
    public function index()
    {
        $goalSelects = GoalSelect::with('Goal')->get();
        $hasil = AhpRepository::comparison();

        return Inertia::render('User/User', compact('goalSelects', 'hasil'));
    }

    public function store(Request $request)
    {

        return redirect()->back()->with('success', 'Data Berhasil Dibuat!');
    }
}
