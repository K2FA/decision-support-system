<?php

namespace Database\Seeders;

use App\Models\Priority;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PrioritySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $priority = [
            [
                'value' => 1,
                'label' => 'sama penting',
            ],
            [
                'value' => 2,
                'label' => 'nilai antara',
            ],
            [
                'value' => 3,
                'label' => 'sedikit lebih penting',
            ],
            [
                'value' => 4,
                'label' => 'nilai antara',
            ],
            [
                'value' => 5,
                'label' => 'lebih penting',
            ],
            [
                'value' => 6,
                'label' => 'nilai antara',
            ],
            [
                'value' => 7,
                'label' => 'sangat penting',
            ],
            [
                'value' => 8,
                'label' => 'nilai antara',
            ],
            [
                'value' => 9,
                'label' => 'sangat penting sekali',
            ],

            [
                'value' => 1 / 2,
                'label' => 'nilai antara',
            ],
            [
                'value' => 1 / 3,
                'label' => 'sedikit kurang penting',
            ],
            [
                'value' => 1 / 4,
                'label' => 'nilai antara',
            ],
            [
                'value' => 1 / 5,
                'label' => 'kurang penting',
            ],
            [
                'value' => 1 / 6,
                'label' => 'nilai antara',
            ],
            [
                'value' => 1 / 7,
                'label' => 'tidak penting',
            ],
            [
                'value' => 1 / 8,
                'label' => 'nilai antara',
            ],
            [
                'value' => 1 / 9,
                'label' => 'tidak penting sekali',
            ],
        ];


        foreach ($priority as $prt) {
            Priority::create([
                'value' => number_format($prt['value'], 3),
                'label' => $prt['label'],
            ]);
        };
    }
}
