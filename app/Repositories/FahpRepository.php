<?php

namespace App\Repositories;

use App\Models\Anhipro;
use App\Models\Chang;
use App\Models\ConsistencyRatio;
use App\Models\CriteriaInput;
use App\Models\Sintesis;
use App\Models\TfnInput;
use Error;
use Illuminate\Support\Facades\DB;

class FahpRepository
{
    public static function Calculate(): array
    {
        $status = false;
        $message = 'Tidak dapat menghitung AHP saat ini. Silakan coba lagi nanti';

        DB::beginTransaction();

        $token = session()->get('random_token')[0];
        $anhipro = Anhipro::query()->where('random_token', $token)->get();

        $_this = new self();

        try {
            if (!$_this->triangular_fuzzy_number($anhipro, $token)) {
                return throw new Error('Matriks TFN Gagal');
            }

            if (!$_this->sintesis_fuzzy($token)) {
                return throw new Error('Matriks Gagal di sintesis!');
            }

            $status = true;
            $message = 'Perhitungan AHP berhasil diselesaikan';

            DB::commit();
        } catch (\Throwable $th) {
            $message = $th->getMessage();

            DB::rollBack();
        }


        return [$status, $message];
    }

    protected function triangular_fuzzy_number($anhipro): bool
    {
        $status = false;

        $chang = Chang::all();

        try {

            $tfn_chang = [];

            foreach ($anhipro as $ahp) {
                $_tfn_chang = $chang->firstWhere('importance', $ahp->result);
                if ($_tfn_chang) {
                    $ahp_array = $ahp->toArray();

                    unset($ahp_array['id']);
                    unset($ahp_array['created_at']);
                    unset($ahp_array['updated_at']);

                    $tfn_chang[] = array_merge(
                        $ahp_array,
                        ['tfn' => $_tfn_chang->tfn]
                    );
                }
            }

            TfnInput::insert($tfn_chang);


            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    protected function sintesis_fuzzy($token): bool
    {
        $status = false;

        $tfn = TfnInput::with('criteria_input')->where('random_token', $token)->get();

        try {
            $dataTfn = [];

            foreach ($tfn as $criteria) {
                $tfn_decode = json_decode($criteria->tfn);

                if (array_key_exists($criteria->criteria_input->kriteria_id, $dataTfn)) {
                    $dataTfn[$criteria->criteria_input->kriteria_id][0] += doubleval($tfn_decode[0]);
                    $dataTfn[$criteria->criteria_input->kriteria_id][1] += doubleval($tfn_decode[1]);
                    $dataTfn[$criteria->criteria_input->kriteria_id][2] += doubleval($tfn_decode[2]);
                } else {
                    $dataTfn[$criteria->criteria_input->kriteria_id][0] = doubleval($tfn_decode);
                    $dataTfn[$criteria->criteria_input->kriteria_id][1] = doubleval($tfn_decode);
                    $dataTfn[$criteria->criteria_input->kriteria_id][2] = doubleval($tfn_decode);
                }
            }

            foreach ($dataTfn as $kriteria_id => $tfn_value) {
                Sintesis::insert([
                    'name' => $kriteria_id,
                    'tfn' => json_encode($tfn_value),
                ]);
            }

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }
}
