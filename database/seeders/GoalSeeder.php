<?php

namespace Database\Seeders;

use App\Models\Goal;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class GoalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Goal::create([
            'name' => "Natural"
        ]);
        Goal::create([
            'name' => "Full Wash"
        ]);
        Goal::create([
            'name' => "Honey"
        ]);
    }
}
