<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PriorityWeight extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'result',
    ];
}
