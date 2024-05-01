<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AhpController extends Controller
{
    public function index(){
        return Inertia::render('User/User');
    }
}
