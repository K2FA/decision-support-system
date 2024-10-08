<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        $this->call([
            NaturalSeeder::class,
            FullWashSeeder::class,
            HoneySeeder::class,
            UserSeeder::class,
            GoalSeeder::class,
            CriteriaSeeder::class,
            AlternativeSeeder::class,
            WeightSeeder::class,
            ChangSeeder::class,
            RoleSeeder::class,
            CriteriaInputSeeder::class,
            RankInputSeeder::class,
            PrioritySeeder::class,
        ]);
    }
}
