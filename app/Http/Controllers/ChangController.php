<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ChangController extends Controller
{
    public function index()
    {
        return Inertia::render("Admin/Tables/TablePage");
    }
}
