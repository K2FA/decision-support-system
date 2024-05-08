<?php

namespace App\Repositories;

use App\Models\ComparisonInput;
use App\Models\ResultCriteriaInput;
use Illuminate\Support\Facades\DB;

class AhpRepository
{

  public static function comparison()
  {
    $inputValue = ComparisonInput::all();


    $status = false;

    DB::beginTransaction();

    try {
      $store = [];

      foreach ($inputValue as $bobot) {
        $store[] = [
          'criteria_input_id' => $bobot->criteria_input_id,
          'bobot' => $bobot->value,
          'result' => 1 / $bobot->value
        ];
      }
      ResultCriteriaInput::insert($store);

      $status = true;
    } catch (\Throwable $th) {
      DB::rollBack();
    }

    DB::commit();
    dd($store);
    return $status;
  }
}
