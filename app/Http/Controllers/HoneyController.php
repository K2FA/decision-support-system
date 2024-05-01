<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HoneyController extends Controller
{
    // public function __construct(Request $request)
    // {
    //     $check = AuthCheck::adminCheck($request); 

    //     if(!blank($check)) {return to_route($check);}
    // }
    
    public function index()
    {
        return Inertia::render('Admin/Tables/TablePage');
    }
}
