<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Alternative extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function rank_input(): HasMany
    {
        return $this->hasMany(RankInput::class);
    }

    public function DevideRank(): HasMany
    {
        return $this->hasMany(DevideRank::class);
    }
}
