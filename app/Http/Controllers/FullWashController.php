<?php

namespace App\Http\Controllers;

use App\Models\FullWash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FullWashController extends Controller
{
    public function index()
    {
        $full_washes = FullWash::with('criteria')->get();
        return Inertia::render('Admin/Tables/TablePage', compact('full_washes'));
    }
}
