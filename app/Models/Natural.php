<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Natural extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subcriteria',
        'weight',
    ];
}
