<?php

namespace App\Repositories;

use App\Models\DevideRank;
use App\Models\RankAmount;
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
                return throw new Error("Perkalian gagal dilakukan!");
            }
            if (!$_this->amount_of_result_devide_alternative($token, $rank_inputs)) {
                return throw new Error('Penjumlahan gagal dilakukan!');
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

                    $devide_result =  $_normalization * $_rank_inputs_value;

                    $store[] = [
                        'result' => $devide_result,
                        'criteria_id' => $rank->criteria_id,
                        'alternative_id' => $rank->alternative_id,
                        'random_token' => $token,
                    ];
                }
            }

            DevideRank::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    protected function amount_of_result_devide_alternative($token, $rank_inputs): bool
    {
        $status = false;

        try {
            $devide_rank = DevideRank::where('random_token', $token)->get();
            $rank_index = $rank_inputs->groupBy('alternative_id');

            $result = [];
            $store = [];

            foreach ($rank_index as $key => $alternatives) {
                $result[$key] = 0;
                foreach ($alternatives as $alternative) {
                    $rank = $devide_rank
                        ->where('alternative_id', $alternative->alternative_id)
                        ->where('criteria_id', $alternative->criteria_id)
                        ->first();

                    $result[$key] += $rank->result;
                }
            }

            foreach ($result as $_result) {
                $store[] = [
                    'result' => $_result,
                    'random_token' => $token,
                ];
            }

            RankAmount::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }
}
