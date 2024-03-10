<?php

namespace Database\Seeders;

use App\Models\Criteria;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CriteriaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Criteria::create([
            'name' => 'Kondisi cuaca ketika panen',
            'code' => 'C1',
        ]);
        Criteria::create([
            'name' => 'Tingkat kematangan',
            'code' => 'C2',
        ]);
        Criteria::create([
            'name' => 'Kadar gula',
            'code' => 'C3',
        ]);
        Criteria::create([
            'name' => 'Ukuran buah',
            'code' => 'C4',
        ]);
        Criteria::create([
            'name' => 'Kapasitas penjemuran',
            'code' => 'C5',
        ]);
    }
}
