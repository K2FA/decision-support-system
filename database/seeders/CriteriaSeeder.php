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
            'name' => 'Kondisi cuaca ',
        ]);
        Criteria::create([
            'name' => 'Tingkat kematangan',
        ]);
        Criteria::create([
            'name' => 'Ukuran Buah',
        ]);
        Criteria::create([
            'name' => 'Kadar Gula',
        ]);
        Criteria::create([
            'name' => 'Kapasitas penjemuran',
        ]);
    }
}
