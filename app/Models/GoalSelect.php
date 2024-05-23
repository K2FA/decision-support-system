<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GoalSelect extends Model
{
    use HasFactory;

    protected $fillable = [
        'choice',
        'random_token'
    ];
}
