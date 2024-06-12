<?php

namespace Database\Seeders;

use App\Models\FullWash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FullWashSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $full_washes = [
            [
                'criteria_id' => 1,
                'subcriteria' => [
                    [
                        'name' => 'Hujan',
                        'weight' => 3
                    ],
                    [
                        'name' => 'Mendung',
                        'weight' => 3
                    ],
                    [
                        'name' => 'Cerah',
                        'weight' => 3
                    ],
                ]
            ],
            [
                'criteria_id' => 2,
                'subcriteria' => [
                    [
                        'name' => 'Tidak Matang',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Kurang Matang',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Matang',
                        'weight' => 3
                    ],
                    [
                        'name' => 'Matang Menuju Busuk',
                        'weight' => 4
                    ],
                ]
            ],
            [
                'criteria_id' => 3,
                'subcriteria' => [
                    [
                        'name' => 'Kecil',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Besar',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Sedang',
                        'weight' => 3
                    ],
                ]
            ],
            [
                'criteria_id' => 4,
                'subcriteria' => [
                    [
                        'name' => 'Rendah (10% - 13%)',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Sedang (14% - 17%)',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Sedang (18% - 21%)',
                        'weight' => 3
                    ],
                ]
            ],
            [
                'criteria_id' => 5,
                'subcriteria' => [
                    [
                        'name' => 'Lengang',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Sedang',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Hampir Penuh',
                        'weight' => 3
                    ],
                ]
            ],
        ];

        foreach ($full_washes as $full_wash) {
            foreach ($full_wash['subcriteria'] as $subcriteria) {
                FullWash::create([
                    'criteria_id' => $full_wash['criteria_id'],
                    'subcriteria' => $subcriteria['name'],
                    'weight'      => $subcriteria['weight'],
                ]);
            }
        }
    }
}
