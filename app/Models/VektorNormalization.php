<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class VektorNormalization extends Model
{
    use HasFactory;

    protected $fillable = [
        'result',
        'total',
        'criteria_id',
        'random_token',
    ];

    public function Criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
