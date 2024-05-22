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
        ]);
        Alternative::create([
            'name' => 'Robusta Budug Asu ',
        ]);
        Alternative::create([
            'name' => 'Excelsa Budug Asu ',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Toyomarto ',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Kreweh ',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Sumberawan ',
        ]);
        Alternative::create([
            'name' => 'Arabika desa Gebuk ',
        ]);
    }
}
