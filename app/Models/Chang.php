<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chang extends Model
{
    use HasFactory;

    protected $fillable = [
        'importance',
        'desc',
        'tfn',
    ];
}
