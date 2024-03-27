<?php

namespace Database\Seeders;

use App\Models\Natural;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class NaturalSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $natural = [
            [
                'criteria_id' => 1,
                'subcriteria' => [
                    [
                        'name' => 'hujan',
                        'weight' => 1
                    ],
                    [
                        'name' => 'mendung',
                        'weight' => 3
                    ],
                    [
                        'name' => 'cerah',
                        'weight' => 5
                    ],
                ]
            ],
            [
                'criteria_id' => 2,
                'subcriteria' => [
                    [
                        'name' => 'tidak matang',
                        'weight' => 1
                    ],
                    [
                        'name' => 'kurang matang',
                        'weight' => 3
                    ],
                    [
                        'name' => 'matang menuju busuk',
                        'weight' => 5
                    ],
                    [
                        'name' => 'matang ',
                        'weight' => 7
                    ],
                ]
            ],
            [
                'criteria_id' => 3,
                'subcriteria' => [
                    [
                        'name' => 'kecil',
                        'weight' => 1
                    ],
                    [
                        'name' => 'besar',
                        'weight' => 3
                    ],
                    [
                        'name' => 'sedang',
                        'weight' => 5
                    ],
                ]
            ],
            [
                'criteria_id' => 4,
                'subcriteria' => [
                    [
                        'name' => 'rendah (10% - 13%)',
                        'weight' => 1
                    ],
                    [
                        'name' => 'tinggi (18% - 21%)',
                        'weight' => 3
                    ],
                    [
                        'name' => 'sedang (14% - 17%)',
                        'weight' => 5
                    ],
                ]
            ],
            [
                'criteria_id' => 5,
                'subcriteria' => [
                    [
                        'name' => 'hampir penuh',
                        'weight' => 1
                    ],
                    [
                        'name' => 'sedang',
                        'weight' => 3
                    ],
                    [
                        'name' => 'lengang',
                        'weight' => 5
                    ],
                ]
            ],
        ];


        foreach ($natural as $_natural) {
            foreach($_natural['subcriteria'] as $subcriteria) {
                Natural::create([
                    'criteria_id' => $_natural['criteria_id'],
                    'subcriteria' => $subcriteria['name'],
                    'weight'      => $subcriteria['weight'],
                ]);
            }
        }

    }
}
