<?php

namespace Database\Seeders;

use App\Models\Alternative;
use App\Models\Criteria;
use App\Models\RankInput;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RankInputSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $store = [];

        $criterias = Criteria::all();
        $alternatives = Alternative::all();

        foreach ($criterias as $criteria) {
            foreach ($alternatives as $alternative) {
                $store[] = [
                    'criteria_id' => $criteria->id,
                    'alternative_id' => $alternative->id,
                ];
            }
        }
        RankInput::insert($store);
    }
}
