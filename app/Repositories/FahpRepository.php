<?php

namespace App\Repositories;

use App\Models\Anhipro;
use App\Models\Chang;
use App\Models\CriteriaInput;
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

        $criteria = CriteriaInput::all();
        $token = session()->get('random_token')[0];
        $anhipro = Anhipro::query()->where('random_token', $token)->get();

        $_this = new self();

        try {
            if ($_this->triangular_fuzzy_number($anhipro)) {
                return throw new Error('Matriks TFN Gagal');
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

            dd($tfn_chang);
            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }
}
