<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Model::unguard();

        $admin = Role::create(['name' => 'Admin']);

        $user = Role::create(['name' => 'User']);


        User::firstWhere('email', 'superadmin@gmail.com')->assignRole('Admin');
        User::firstWhere('email', 'user@gmail.com')->assignRole('User');
    }
}
