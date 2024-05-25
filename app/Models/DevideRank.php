<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DevideRank extends Model
{
    use HasFactory;

    protected $fillable = [
        'result',
        'criteria_id',
        'alternative_id',
        'random_token',
    ];

    public function Criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }

    public function Alternative(): BelongsTo
    {
        return $this->belongsTo(Alternative::class);
    }
}
