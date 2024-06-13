<?php

namespace App\Repositories;

use App\Models\AmountSintesis;
use App\Models\Anhipro;
use App\Models\Chang;
use App\Models\ComparisonMultiplication;
use App\Models\Criteria;
use App\Models\CrossMultiplication;
use App\Models\MinValue;
use App\Models\Sintesis;
use App\Models\TfnInput;
use App\Models\VektorNormalization;
use Error;
use Illuminate\Support\Facades\DB;

class FahpRepository
{
    public static function Calculate(): array
    {
        $status = false;
        $message = 'Tidak dapat menghitung FAHP saat ini. Silakan coba lagi nanti';

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

            if (!$_this->amount_sintesis_fuzzy($token)) {
                return throw new Error('Matriks Gagal Dijumlahkan');
            }

            if (!$_this->cross_multiplication_sintesis_fuzzy($token)) {
                return throw new Error('Perkalian Silang Gagal Dilakukan');
            }

            if (!$_this->comparison_of_probability($token)) {
                return throw new Error('Perbandingan Tingkat Kemungkinan Gagal Dilakukan');
            }

            if (!$_this->minimum_value($token)) {
                return throw new Error('Pencarian nilai minimum gagal');
            }

            if (!$_this->normalization($token)) {
                return throw new Error('Normalisasi Gagal dilakukan');
            }

            $status = true;
            $message = 'Perhitungan FAHP berhasil diselesaikan';

            DB::commit();
        } catch (\Throwable $th) {
            $message = $th->getMessage();

            DB::rollBack();
        }


        return [$status, $message];
    }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Change data to TFN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    protected function triangular_fuzzy_number($anhipro): bool
    {
        $status = false;


        try {
            $chang = Chang::all();

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


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Sintesis data ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    protected function sintesis_fuzzy($token): bool
    {
        $status = false;

        try {
            $tfn = TfnInput::with('criteria_input')->where('random_token', $token)->get();


            $dataTfn = [];
            $store = [];

            foreach ($tfn as $criteria) {
                $tfn_decode = json_decode($criteria->tfn);

                if (array_key_exists($criteria->criteria_input->kriteria_id, $dataTfn)) {
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][0] += doubleval($tfn_decode[0]), 3);
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][1] += doubleval($tfn_decode[1]), 3);
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][2] += doubleval($tfn_decode[2]), 3);
                } else {
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][0] = doubleval($tfn_decode), 3);
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][1] = doubleval($tfn_decode), 3);
                    number_format($dataTfn[$criteria->criteria_input->kriteria_id][2] = doubleval($tfn_decode), 3);
                }
            }

            foreach ($dataTfn as $index => $value) {
                $store[] = [
                    'name' => $index,
                    'tfn' => json_encode($value),
                    'random_token' => $token,
                ];
            }

            Sintesis::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    protected function amount_sintesis_fuzzy($token): bool
    {
        $status = false;
        try {

            $sintesis = Sintesis::where('random_token', $token)->get();

            $datas = [0, 0, 0];

            foreach ($sintesis as $index => $tfn_value) {
                $tfn_decode = json_decode($tfn_value->tfn);

                $datas[0] += $tfn_decode[0];
                $datas[1] += $tfn_decode[1];
                $datas[2] += $tfn_decode[2];
            }


            AmountSintesis::insert([
                'result' => json_encode($datas),
                'random_token' => $token,
            ]);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    protected function cross_multiplication_sintesis_fuzzy($token): bool
    {
        $status = false;

        try {

            $sintesis = Sintesis::where('random_token', $token)->get();
            $amount_sintesis = AmountSintesis::where('random_token', $token)->get();

            $datas = [];
            $store = [];

            foreach ($amount_sintesis as $amount_value) {
                $amount_sintesis_decode = json_decode($amount_value->result);
            }

            foreach ($sintesis as $_sintesis) {
                $tfn_decode = json_decode($_sintesis->tfn);

                $datas[] = [
                    number_format($tfn_decode[0] * (1 / $amount_sintesis_decode[2]), 3),
                    number_format($tfn_decode[1] * (1 / $amount_sintesis_decode[1]), 3),
                    number_format($tfn_decode[2] * (1 / $amount_sintesis_decode[0]), 3),
                ];
            }

            foreach ($datas as $index => $data) {
                $store[] = [
                    'name' => $sintesis[$index]->name,
                    'result' => json_encode($data),
                    'random_token' => $token,
                ];
            }

            CrossMultiplication::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }


    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Comparison of probability criteria ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    protected function comparison_of_probability($token): bool
    {
        $status = false;

        try {
            $cross_multiplication = CrossMultiplication::where('random_token', $token)->get();

            $hasil = [];
            $store = [];

            foreach ($cross_multiplication as $c1) {

                foreach ($cross_multiplication as $c2) {
                    if ($c1->id == $c2->id) {
                        continue;
                    }

                    $c1_lmu = json_decode($c1->result);
                    $c2_lmu = json_decode($c2->result);

                    /**
                     * =
                     * IF(D21 >= D22;1;
                     *     IF(C22>=E21;0;
                     *         (C21-E22)/(D22-E22)-(D21-C21)
                     *     )
                     * )
                     * 
                     * c = 0
                     * d = 1
                     * e = 2
                     * 
                     * 21 = c1
                     * 22 = c2
                     */
                    $result = $c1_lmu[1] >= $c2_lmu[1] ? 1 : ($c2_lmu[0] >= $c1_lmu[2] ? 0 : (($c2_lmu[0] - $c1_lmu[2]) / (($c1_lmu[1] - $c1_lmu[2]) - ($c2_lmu[1] - $c2_lmu[0]))));

                    $hasil["{$c1->name}_{$c2->name}"] = $result;
                }
            }

            foreach ($hasil as $index => $value) {
                $store[] = [
                    'name' => $index,
                    'result' => number_format($value, 3),
                    'random_token' => $token,
                ];
            }

            ComparisonMultiplication::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ choose min value from comparison ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    protected function minimum_value($token): bool
    {
        $status = false;

        try {
            $comparison = ComparisonMultiplication::where('random_token', $token)->get();

            $min = [];
            $grouped = [];
            $store = [];

            foreach ($comparison as $item) {
                $prefix = explode('_', $item->name)[0];

                if (!isset($grouped[$prefix])) {
                    $grouped[$prefix] = [];
                }

                $grouped[$prefix][] = $item;
            }

            foreach ($grouped as $prefix => $min_value) {
                $min[$prefix] = collect($min_value)->min('result');
            }

            foreach ($min as $index => $value) {
                $store[] = [
                    'name' => $index,
                    'result' => number_format($value, 3),
                    'random_token' => $token,
                ];
            }

            MinValue::insert($store);

            $status = true;
        } catch (\Throwable $th) {
        }
        return $status;
    }

    // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Normlization ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    protected function normalization($token): bool
    {
        $status = false;

        try {
            $min_value = MinValue::where('random_token', $token)->get();
            $criteria = Criteria::all();

            $amount = 0;
            $result = [];
            $total_result = 0;
            $store = [];

            // total
            foreach ($min_value as $min) {
                $amount += $min->result;
            }

            // untuk data normalized
            foreach ($min_value as $min) {
                $normalized = $min->result / $amount;
                $result[] = number_format($normalized, 3);
            }

            foreach ($result as $index => $data) {
                $total_result += $data;
                $store[] = [
                    'normalized' => $data,
                    'total' => $total_result,
                    'criteria_id' => $criteria[$index]->id,
                    'random_token' => $token,
                ];
            }

            VektorNormalization::insert($store);

            $status = true;
        } catch (\Throwable $th) {
            dd($th);
        }

        return $status;
    }
}
