<?php

namespace Database\Seeders;

use App\Models\Alternative;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AlternativeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Alternative::create([
            'name' => 'Arabika Budug Asu ',
            'code' => 'A1',
        ]);
        Alternative::create([
            'name' => 'Robusta Budug Asu ',
            'code' => 'A2',
        ]);
        Alternative::create([
            'name' => 'Excelsa Budug Asu ',
            'code' => 'A3',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Toyomarto ',
            'code' => 'A4',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Kreweh ',
            'code' => 'A5',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Sumberawan ',
            'code' => 'A6',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Gebuk ',
            'code' => 'A7',
        ]);
    }
}
