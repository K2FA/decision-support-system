<?php

namespace App\Http\Controllers;

use App\Models\Chang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChangController extends Controller
{
    public function index()
    {
        $changs = Chang::all();
        return Inertia::render("Admin/Tables/TablePage", compact('changs'));
    }
}
