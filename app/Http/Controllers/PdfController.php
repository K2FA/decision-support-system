<?php

namespace App\Http\Controllers;

use App\Models\Alternative;
use App\Models\Anhipro;
use App\Models\Criteria;
use App\Models\CriteriaInput;
use App\Models\FinalRank;
use App\Models\FullWash;
use App\Models\Goal;
use App\Models\GoalSelect;
use App\Models\Honey;
use App\Models\Natural;
use App\Models\RankInput;
use App\Models\RankInputData;
use Illuminate\Http\Request;
use Mpdf\Mpdf;

class PdfController extends Controller
{
    public function generatePdf()
    {
        $token = session()->get('random_token')[0];
        $rank_results = FinalRank::with("Alternative", 'GoalSelect')->where('random_token', $token)
            ->latest()
            ->take(7)
            ->get();

        $criterias = Criteria::all();
        $alternative = Alternative::all();
        $criteria_input = CriteriaInput::with('Criteria')->get()->groupBy('kriteria_id');
        $anhipros = Anhipro::with('CriteriaInput')->where('random_token', $token)->get()->groupBy('criteria_input_id');
        $rankInputs = RankInput::with('criteria', 'alternative')->get()->groupBy('alternative_id');
        $rank_datas = RankInputData::with('RankInput')->where('random_token', $token)->get()->groupBy('rank_input_id');


        if ($rank_results->isEmpty()) {
            return response()->json(['error' => 'No data found'], 404);
        }

        $html = view('pdf', compact(
            'rank_results',
            'anhipros',
            'criterias',
            'criteria_input',
            'alternative',
            'rankInputs',
            'rank_datas',

        ))
            ->render();

        $mpdf = new Mpdf();
        $mpdf->WriteHTML($html);
        $pdfOutput = $mpdf->Output('', 'S');

        dd($rank_datas, $html);

        return response($pdfOutput, 200)
            ->header('Content-Type', 'application/pdf')
            ->header('Content-Disposition', 'inline; filename="hasil perhitungan.pdf"');
    }
}
