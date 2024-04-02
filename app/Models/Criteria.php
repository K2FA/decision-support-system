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

    public function natural():HasMany
    {
        return $this->hasMany(Natural::class);
    }

    public function fullwash():HasMany
    {
        return $this->hasMany(FullWash::class);
    }

    public function honey():HasMany
    {
        return $this->hasMany(Honey::class);
    }
}
