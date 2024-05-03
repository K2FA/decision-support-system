<?php

namespace Database\Seeders;

use App\Models\Criteria;
use App\Models\CriteriaInput;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CriteriaInputSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $store = [];

        $criterias = Criteria::all();

        foreach ($criterias as $criteria) {
            foreach($criterias as $_criteria){
                $store[] = [
                    'kriteria_id' => $criteria->id,
                    'jenis' => $_criteria->id,
                ];
            }
        }

        CriteriaInput::insert($store);
    }
}
