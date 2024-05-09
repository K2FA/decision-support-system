<?php

namespace App\Repositories;

use App\Models\Anhipro;
use App\Models\ComparisonInput;
use App\Models\CriteriaInput;
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
          'result' => number_format(1 / $_compare, 2),
        ];

        $pairwise_insert[] = $append_to_pairwise_insert;
      }

      // insert to database
      Anhipro::insert($pairwise_insert);

      $status = true;
    } catch (\Throwable $th) {
      dd($th);
    }
    return $status;
  }
}
