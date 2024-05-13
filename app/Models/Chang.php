<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Chang extends Model
{
    use HasFactory;

    protected $fillable = [
        'importance',
        'desc',
        'tfn',
    ];

    public function TfnInput(): HasMany
    {
        return $this->hasMany(TfnInput::class);
    }
}
