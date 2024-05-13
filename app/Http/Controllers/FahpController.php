<?php

namespace App\Http\Controllers;

use App\Models\TfnInput;
use App\Repositories\FahpRepository;
use Illuminate\Http\Request;

class FahpController extends Controller
{
    //

    public function index()
    {
        FahpRepository::Calculate();
        $cek = TfnInput::all();

        dd($cek);
    }
}
