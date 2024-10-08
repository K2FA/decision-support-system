<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Criteria extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function Natural(): HasMany
    {
        return $this->hasMany(Natural::class);
    }

    public function FullWash(): HasMany
    {
        return $this->hasMany(FullWash::class);
    }

    public function Honey(): HasMany
    {
        return $this->hasMany(Honey::class);
    }

    public function CriteriaInput(): HasMany
    {
        return $this->hasMany(CriteriaInput::class);
    }

    public function rank_input(): HasMany
    {
        return $this->hasMany(RankInput::class);
    }

    public function DevideRank(): HasMany
    {
        return $this->hasMany(DevideRank::class);
    }
    public function VektorNormalization(): HasMany
    {
        return $this->hasMany(VektorNormalization::class);
    }
}
