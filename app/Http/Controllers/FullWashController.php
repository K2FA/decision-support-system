<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\FullWash;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FullWashController extends Controller
{
    // public function __construct(Request $request)
    // {
    //     $check = AuthCheck::adminCheck($request); 

    //     if(!blank($check)) {return to_route($check);}
    // }

    public function index()
    {
        $full_washes = FullWash::with('criteria')->get();
        return Inertia::render('Admin/Tables/TablePage', compact('full_washes'));
    }
}
