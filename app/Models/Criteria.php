<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Criteria extends Model
{
    use HasFactory;

    protected $fillable =[
        'name',
        'code',
    ];

    public function Natural():HasMany
    {
        return $this->hasMany(Natural::class);
    }

    public function FullWash():HasMany
    {
        return $this->hasMany(FullWash::class);
    }

    public function Honey():HasMany
    {
        return $this->hasMany(Honey::class);
    }
}
