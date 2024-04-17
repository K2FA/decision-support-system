<?php

namespace Database\Seeders;

use App\Models\Weight;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class WeightSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        for($i = 1; $i <=16; $i++){
            Weight::create([
                'natural_id' => $i,
                'full_wash_id' => $i,
                'honey_id' => $i,
            ]);
        }
    }
}
