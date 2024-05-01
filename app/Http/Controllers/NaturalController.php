<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Natural;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NaturalController extends Controller
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
        $naturals = Natural::with('criteria')->get();
        return Inertia::render("Admin/Tables/TablePage", compact('naturals'));
    }

}
