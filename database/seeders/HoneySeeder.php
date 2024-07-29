<?php

namespace Database\Seeders;

use App\Models\Honey;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HoneySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $honey = [
            [
                'criteria_id' => 1,
                'subcriteria' => [
                    [
                        'name' => 'Hujan',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Mendung',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Cerah',
                        'weight' => 3
                    ],
                ],
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
                ],
            ],
            [
                'criteria_id' => 3,
                'subcriteria' => [
                    [
                        'name' => 'Kecil (≤ 0,7 cm)',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Besar (1,1 cm - 1,5 cm)',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Sedang (0,8 cm - 1 cm)',
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
                        'name' => 'Sedang (14$ - 17%)',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Tinggi (18% - 21%)',
                        'weight' => 3
                    ],
                ],
            ],
            [
                'criteria_id' => 5,
                'subcriteria' => [
                    [
                        'name' => 'Hampir Penuh',
                        'weight' => 1
                    ],
                    [
                        'name' => 'Sedang',
                        'weight' => 2
                    ],
                    [
                        'name' => 'Lengang',
                        'weight' => 3
                    ],
                ],
            ],
        ];

        foreach ($honey as $_honey) {
            foreach ($_honey['subcriteria'] as $subcriteria) {
                Honey::create([
                    'criteria_id' => $_honey['criteria_id'],
                    'subcriteria' => $subcriteria['name'],
                    'weight'      => $subcriteria['weight'],
                ]);
            }
        }
    }
}
