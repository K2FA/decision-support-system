<?php

namespace App\Http\Controllers;

use App\Models\TfnInput;
use App\Repositories\FahpRepository;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FahpController extends Controller
{
    //

    public function index()
    {
        $cek = FahpRepository::Calculate();
        $cek2 = TfnInput::all();

        // dd($cek2);
    }
}
