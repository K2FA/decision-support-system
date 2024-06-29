<?php

namespace App\Repositories;

use App\Helpers\MatrixMultiplication;
use App\Models\Anhipro;
use App\Models\ComparisonInput;
use App\Models\ConsistencyRatio;
use App\Models\CriteriaInput;
use App\Models\DevidePw;
use App\Models\MultiplicationMatrix;
use App\Models\PairwiseComparison;
use App\Models\Priority;
use App\Models\PriorityWeight;
use Error;
use Illuminate\Support\Facades\DB;

class AhpRepository
{

  public static function Calculate(): array
  {
    $status = false;
    $message = 'Tidak dapat menghitung AHP saat ini. Silakan coba lagi nanti';

    DB::beginTransaction();

    $token = session()->get('random_token')[0];

    $comparison = ComparisonInput::query()->where('random_token', $token)->get();
    $criteria = CriteriaInput::all();


    $_this = new self();

    try {
      if (!$_this->pairwise($comparison, $criteria, $token)) {
        return throw new Error('Matriks Perbandingan Berpasangan Gagal');
      }

      if (!$_this->pairwise_result($criteria, $token)) {
        return throw new Error('Hasil Matriks Perbandingan Pasangan Gagal!');
      }

      if (!$_this->priority_weight($criteria, $token)) {
        return throw new Error('Menghitung Bobot Prioritas Gagal!');
      }

      if (!$_this->multiplication_matrix($criteria, $token)) {
        return throw new Error('Menghitung Perkalian Matriks Gagal!');
      }

      if (!$_this->devide_multiplication_matrix_with_pw($criteria, $token)) {
        return throw new Error('Membagi Rasio Konsistensi Dengan Pw Gagal!');
      }

      if (!$_this->consistency_ratio($token)) {
        return throw new Error('Menghitung Rasio Konsistensi Konsistensi Gagal!');
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pairwise Matrix ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function pairwise($comparison, $criteria, $token): bool
  {
    $status = false;
    $priority = Priority::all();

    try {

      $pairwise_insert = [];

      foreach ($comparison as $compare) {
        $pairwise_insert[] = [
          'criteria_input_id' => $compare->criteria_input_id,
          'result' => $compare->value,
          'label' => $compare->label,
          'random_token' => $compare->random_token,
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

        $compare_value = 1 / $_compare;
        $result = 0;
        $label = "";

        if ($compare_value > 1) {
          $result = round($compare_value);
        } else {
          $result = number_format($compare_value, 3);
        }

        foreach ($priority as $prt) {
          if ($prt->value == $result) {
            $label = $prt->label;
          }
        }

        $append_to_pairwise_insert = [
          'label' => $label,
          'result' => number_format($result, 3),
          'criteria_input_id' => $cnig->id,
          'random_token' => $token,
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Pairwise Matrix Amount ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function pairwise_result($criteria, $token): bool
  {
    $status = false;

    try {
      $anhipro = Anhipro::query()->where('random_token', $token)->get();

      $criteria_jenis = $criteria->groupBy('jenis');

      foreach ($criteria_jenis as $index => $crit) {
        $criteria_count = 0;

        foreach ($crit as $_index => $_criteria) {
          $criteria_count += $anhipro->firstWhere('criteria_input_id', $_criteria->id)?->result;
        }

        // insert to DB
        PairwiseComparison::insert([
          'name' => $index,
          'result' => $criteria_count,
          'random_token' => $token
        ]);
      }

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Set PW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function priority_weight($criteria, $token): bool
  {
    $status = false;

    try {
      // get duplicate from matrix pairwise data and result

      $anhipro = Anhipro::query()->where('random_token', $token)->get();
      $pairwiseComparison = PairwiseComparison::query()->where('random_token', $token)->get();

      $criteria_gb_name = $criteria->groupBy('kriteria_id');

      foreach ($criteria_gb_name as $index => $criteria) {
        $amount = 0;

        foreach ($criteria as $idx => $crit) {
          $anhipro_result = $anhipro->firstWhere('criteria_input_id', $crit->id)?->result;
          $pairwise_comparison_result = $pairwiseComparison->firstWhere('name', $crit->jenis)?->result;

          if ($anhipro_result !== null && $pairwise_comparison_result !== null) {
            $hasil = $anhipro_result / $pairwise_comparison_result;
            $amount += $hasil;
          }
        }

        $pw = $amount / 5;
        $amounts = $amount;

        $store = [
          [
            'name' => "{$index}-jumlah",
            'result' => $amounts,
            'random_token' => $token,
          ],
          [
            'name' => "{$index}-pw",
            'result' => $pw,
            'random_token' => $token,
          ],
        ];

        PriorityWeight::insert($store);
      }

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Divide Multiplication Matrix ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function multiplication_matrix($criteria, $token): bool
  {
    $status = false;

    try {
      $anhipro = Anhipro::query()->where('random_token', $token)->get();
      $criteria_gb_name = $criteria->groupBy('kriteria_id');

      $ratio = [];
      $matrix1 = [];
      $matrix2 = [];

      $priorityWeight = PriorityWeight::query()->where('name', 'like', '%-pw')->where('random_token', $token)->get();

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
          'result' => $_ratio,
          'random_token' => $token,
        ];
      }

      MultiplicationMatrix::insert($store);

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Divide Multiplication Matrix with PW ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function devide_multiplication_matrix_with_pw($criteria, $token): bool
  {
    $status = false;

    try {
      // get all perkalian matriks
      $multiplication = MultiplicationMatrix::query()->where('random_token', $token)->get();

      $priorityWeight = PriorityWeight::query()->where('name', 'like', '%-pw')->where('random_token', $token)->get();

      $store = [];

      foreach ($multiplication as $matrix) {
        $hasil = $matrix?->result;
        $pw = $priorityWeight->firstWhere('name', "{$matrix?->name}-pw")?->result;

        $store[] = [
          'name' => $matrix->name,
          'result' => $hasil / $pw,
          'random_token' => $token,
        ];
      }
      DevidePw::insert($store);

      $status = true;
    } catch (\Throwable $th) {
      // dd($th);
    }
    return $status;
  }

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Consistency Ratio ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  protected function consistency_ratio($token): bool
  {
    $status = false;

    // get all data from devide_multiplication_matrix_with_pw

    $devidePw = DevidePw::query()->where('random_token', $token)->get();
    $total = $devidePw->count();


    try {
      $hasil = 0;

      foreach ($devidePw as $_devidePw) {
        $hasil += $_devidePw->result;
      }


      // counting lambda maks
      $lambda = $hasil / $total;

      // Consistency Index
      $ci = ($lambda - $total) / ($total - 1);

      // Consistency Ratio
      $cr = number_format($ci / 1.12, 3);

      ConsistencyRatio::insert([
        'result' => $cr,
        'random_token' => $token,
      ]);

      $status = true;
    } catch (\Throwable $th) {
    }
    return $status;
  }
}
