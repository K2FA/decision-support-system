<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GoalSelect extends Model
{
    use HasFactory;

    protected $fillable = [
        'choice',
        'random_token'
    ];


    public function FinalRank(): HasMany
    {
        return $this->hasMany(FinalRank::class);
    }
}
