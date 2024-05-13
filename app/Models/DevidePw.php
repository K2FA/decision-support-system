<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DevidePw extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'result',
        'random_token',
    ];
}
