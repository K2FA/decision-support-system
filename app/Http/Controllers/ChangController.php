<?php

namespace App\Http\Controllers;

use app\Helper\AuthCheck;
use App\Models\Chang;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChangController extends Controller
{
    public function __construct(Request $request)
    {
        $this->middleware('admin');
    }

    public function index()
    {
        $changs = Chang::all();
        $tfns = [];
        $reciprocals = [];

        foreach ($changs as $chang) {
            $tfns[] = json_decode($chang->tfn);
            $reciprocals[] = json_decode($chang->reciprocal);
        }
        return Inertia::render("Admin/Tables/TablePage", compact('changs', 'tfns', 'reciprocals'));
    }
}
