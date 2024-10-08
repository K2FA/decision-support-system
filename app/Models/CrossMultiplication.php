<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CrossMultiplication extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'result',
        'random_token',
    ];
}
