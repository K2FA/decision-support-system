<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class VektorNormalization extends Model
{
    use HasFactory;

    protected $fillable = [
        'result',
        'random_token',
    ];
}
