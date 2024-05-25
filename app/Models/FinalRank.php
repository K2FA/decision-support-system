<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FinalRank extends Model
{
    use HasFactory;

    protected $fillable = [
        'rank',
        'result',
        'random_token',
    ];
}
