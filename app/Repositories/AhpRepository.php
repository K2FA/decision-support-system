<?php

namespace App\Repositories;

use App\Helpers\MatrixMultiplication;
use App\Models\Anhipro;
use App\Models\ComparisonInput;
use App\Models\CriteriaInput;
use App\Models\MultiplicationMatrix;
use App\Models\PairwiseComparison;
use App\Models\PriorityWeight;
use App\Models\ResultCriteriaInput;
use Error;
use Illuminate\Support\Facades\DB;

class AhpRepository
{

  // public static function comparison()
  // {
  //   $inputValue = ComparisonInput::all();

  //   $status = false;

  //   DB::beginTransaction();

  //   try {
  //     $store = [];

  //     foreach ($inputValue as $bobot) {
  //       $store[] = [
  //         'criteria_input_id' => $bobot->criteria_input_id,
  //         'result' => 1 / $bobot->value
  //       ];
  //     }
  //     ResultCriteriIanput::insert($store);

  //     $status = true;
  //   } catch (\Throwable $th) {
  //     DB::rollBack();
  //   }

  //   DB::commit();
  //   dd($store);
  //   return $status;
  // }

  public static function Calculate(): array
  {
    $status = false;
    $message = 'Tidak dapat menghitung AHP saat ini. Silakan coba lagi nanti';

    DB::beginTransaction();

    $comparison = ComparisonInput::all();
    $criteria = CriteriaInput::all();

    $_this = new self();

    try {
      if (!$_this->pairwise($comparison, $criteria)) {
        return throw new Error('Matriks Perbandingan Berpasangan Gagal');
      }

      if (!$_this->pairwise_result($criteria)) {
        return throw new Error('Hasil Matriks Perbandingan Pasangan Gagal!');
      }

      if (!$_this->priority_weight($criteria)) {
        return throw new Error('Menghitung Bobot Prioritas Gagal!');
      }

      if (!$_this->multiplication_matrix($criteria)) {
        return throw new Error('Menghitung Perkalian Matriks Gagal!');
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

  protected function pairwise($comparison, $criteria): bool
  {
    $status = false;
    try {
      Anhipro::query()->delete();

      $pairwise_insert = [];

      foreach ($comparison as $compare) {
        $pairwise_insert[] = [
          'criteria_input_id' => $compare->criteria_input_id,
          'result' => $compare->value,
        ];
      }

      // ids for filter kriteria
      $criteria_ids = [];

      foreach ($comparison as $compare) {
        $criteria_ids[] = $compare->criteria_input_id;
      }

      // checking id if not in input
      $criteria_not_in_input = $criteria->whereNotIn('id', $criteria_ids);

      // get value 1/value
      foreach ($criteria_not_in_input as $cnig) {
        $_criteria_id = $criteria
          ->where('kriteria_id', $cnig->jenis)
          ->where('jenis', $cnig->kriteria_id)
          ->first();

        $_compare = $comparison->firstWhere('criteria_input_id', $_criteria_id->id);
        $_compare = $_compare->value != 0 ? $_compare->value : 1;

        $append_to_pairwise_insert = [
          'criteria_input_id' => $cnig->id,
          'result' => number_format(1 / $_compare, 3),
        ];

        $pairwise_insert[] = $append_to_pairwise_insert;
      }

      // insert to database
      Anhipro::insert($pairwise_insert);

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  protected function pairwise_result($criteria): bool
  {
    $status = false;

    try {
      $anhipro = Anhipro::all();
      $criteria_jenis = $criteria->groupBy('jenis');

      // Delete fill in the database
      PairwiseComparison::query()->delete();

      foreach ($criteria_jenis as $index => $crit) {
        $criteria_count = 0;

        foreach ($crit as $_index => $_criteria) {
          $criteria_count += $anhipro->firstWhere('criteria_input_id', $_criteria->id)?->result;
        }

        // insert to DB
        PairwiseComparison::insert([
          'name' => $index,
          'result' => number_format($criteria_count, 3),
        ]);
      }
      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  protected function priority_weight($criteria): bool
  {
    $status = false;

    try {
      // get duplicate from matrix pairwise data and result

      $anhipro = Anhipro::all();
      $pairwiseComparison = PairwiseComparison::all();
      $criteria_gb_name = $criteria->groupBy('kriteria_id');


      // clear table from db
      PriorityWeight::query()->delete();

      foreach ($criteria_gb_name as $index => $criteria) {
        $amount = 0;

        foreach ($criteria as $idx => $crit) {
          $hasil = $anhipro->firstWhere('criteria_input_id', $crit->id)?->result /
            $pairwiseComparison->firstWhere('name', $crit->jenis)?->result;

          $amount += $hasil;
        }

        $pw = number_format($amount / 5, 3);
        $amounts = number_format($amount, 3);

        $store = [
          [
            'name' => "{$index}-jumlah",
            'result' => $amounts,
          ],
          [
            'name' => "{$index}-pw",
            'result' => $pw,
          ],
        ];

        PriorityWeight::insert($store);
      }

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  protected function multiplication_matrix($criteria): bool
  {
    $status = false;

    try {
      $anhipro = Anhipro::all();
      $criteria_gb_name = $criteria->groupBy('kriteria_id');

      // clear db
      MultiplicationMatrix::query()->delete();

      $ratio = [];
      $matrix1 = [];
      $matrix2 = [];

      $priorityWeight = PriorityWeight::query()->where('name', 'like', '%-pw')->get();

      foreach ($priorityWeight as $pw) {
        $matrix2[] = $pw->result;
      }

      foreach ($criteria_gb_name as $index => $criteria) {
        foreach ($criteria as $crit) {
          $matrix1[$index][] = $anhipro->firstWhere('criteria_input_id', $crit->id)?->result;
        }
      }

      $ratio = MatrixMultiplication::count($matrix1, $matrix2);
      $store = [];


      foreach ($ratio as $index => $_ratio) {
        $store[] = [
          'name' => $index,
          'result' => number_format($_ratio, 3),
        ];
      }

      MultiplicationMatrix::insert($store);

      $status = true;
    } catch (\Throwable $th) {
      dd($th);
    }
    return $status;
  }
}
