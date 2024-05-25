<?php

namespace App\Repositories;

use App\Models\DevideRank;
use App\Models\RankInput;
use App\Models\RankInputData;
use App\Models\VektorNormalization;
use Error;
use Illuminate\Support\Facades\DB;

class RankRepository
{
    public static function calculate(): array
    {
        $status = false;
        $message = 'Tidak dapat melakukan perangkingan saat ini. Silakan coba lagi nanti';

        DB::beginTransaction();
        $token = session()->get('random_token')[0];

        $rank_inputs = RankInput::all();

        $_this = new self();

        try {
            if (!$_this->devide_alternative_with_nomalization_fuzzy($token, $rank_inputs)) {
                return throw new Error("Perkalian gagal dilakukan");
            }

            $status = true;
            $message = "Perangkingan Berhasil Dilakukan!";

            DB::commit();
        } catch (\Throwable $th) {
            $message = $th->getMessage();

            DB::rollBack();
        }

        return [$status, $message];
    }

    protected function devide_alternative_with_nomalization_fuzzy($token, $rank_inputs): bool
    {
        $status = false;

        try {
            $rank_inputs_value = RankInputData::where('random_token', $token)->get();
            $normalization = VektorNormalization::where('random_token', $token)->get();
            $rank_inputs_index = $rank_inputs->groupBy('criteria_id');

            $devide = [];
            $store = [];

            foreach ($rank_inputs_index as $index => $rank_index) {

                foreach ($rank_index as $idx => $rank) {
                    $_rank_inputs_value = $rank_inputs_value->firstWhere('rank_input_id', $rank->id)?->value;
                    $_normalization = $normalization->firstWhere('id', $rank->criteria_id)?->normalized;

                    $devide[] =  $_normalization * $_rank_inputs_value;
                }
            }

            foreach ($devide as $dvd) {
                $store[] = [
                    'result' => number_format($dvd, 3),
                    'random_token' => $token,
                ];
            }

            DevideRank::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }
}
