<?php

namespace Database\Seeders;

use App\Models\Chang;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $changs = [
            [
                'importance' => 1,
                'desc' => "Perbandingan elemen yang sama (Just Equal)",
                'tfn' => json_encode([1, 1, 1]),
            ],
            [
                'importance' => 2,
                'desc' => "Pertengahan (Intermediate)",
                'tfn' => json_encode([1 / 2, 1, 3 / 2]),
            ],
            [
                'importance' => 3,
                'desc' => "Elemen satu cukup penting dari yang lainnya (Moderately important)",
                'tfn' => json_encode([1, 3 / 2, 2]),
            ],
            [
                'importance' => 4,
                'desc' => "Pertengahan (Intermediate) elemen satu lebih cukup penting dari yang lainnya",
                'tfn' => json_encode([3 / 2, 2, 5 / 2]),
            ],
            [
                'importance' => 5,
                'desc' => "Elemen satu kuat pentingnya dari yang lain (Strongly Important)",
                'tfn' => json_encode([2, 5 / 2, 3]),
            ],
            [
                'importance' => 6,
                'desc' => "Pertengahan (Intermediate)",
                'tfn' => json_encode([5 / 2, 3, 7 / 2]),
            ],
            [
                'importance' => 7,
                'desc' => "Elemen satu lebih kuat pentingnya dari yang lain (Very Strong)",
                'tfn' => json_encode([3, 7 / 2, 4]),
            ],
            [
                'importance' => 8,
                'desc' => "Pertengahan (Intermediate)",
                'tfn' => json_encode([7 / 2, 4, 9 / 2]),
            ],
            [
                'importance' => 9,
                'desc' => "Elemen satu mutlak lebih penting dari yang lainnya (Extremely Strong)",
                'tfn' => json_encode([4, 9 / 2, 9 / 2]),
            ],
            [
                'importance' => 1 / 2,
                'desc' => "Kebalikan dari intensitas kepentingan 2",
                'tfn' => json_encode([2 / 3, 1, 2]),
            ],
            [
                'importance' => 1 / 3,
                'desc' => "Kebalikan dari intensitas kepentingan 3",
                'tfn' => json_encode([1 / 2, 2 / 3, 1]),
            ],
            [
                'importance' => 1 / 4,
                'desc' => "Kebalikan dari intensitas kepentingan 4",
                'tfn' => json_encode([2 / 5, 1 / 2, 2 / 3]),
            ],
            [
                'importance' => 1 / 5,
                'desc' => "Kebalikan dari intensitas kepentingan 5",
                'tfn' => json_encode([1 / 3, 2 / 5, 1 / 2]),
            ],
            [
                'importance' => 1 / 6,
                'desc' => "Kebalikan dari intensitas kepentingan 6",
                'tfn' => json_encode([2 / 7, 1 / 3, 2 / 5]),
            ],
            [
                'importance' => 1 / 7,
                'desc' => "Kebalikan dari intensitas kepentingan 7",
                'tfn' => json_encode([1 / 4, 2 / 7, 1 / 3]),
            ],
            [
                'importance' => 1 / 8,
                'desc' => "Kebalikan dari intensitas kepentingan 8",
                'tfn' => json_encode([2 / 9, 1 / 4, 2 / 9]),
            ],
            [
                'importance' => 1 / 9,
                'desc' => "Kebalikan dari intensitas kepentingan 9",
                'tfn' => json_encode([2 / 9, 2 / 9, 1 / 4]),
            ],
        ];

        foreach ($changs as $chang) {
            Chang::create([
                'importance' => number_format($chang['importance'], 2),
                'desc' => $chang['desc'],
                'tfn' => $this->formatJson($chang['tfn']),
            ]);
        }
    }

    private function formatJson($json)
    {
        $arr = json_decode($json);
        $formatted = array_map(function ($value) {
            return number_format($value, 3, '.', '');
        }, $arr);
        return json_encode($formatted);
    }
}
