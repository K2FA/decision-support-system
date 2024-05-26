<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RankAmount extends Model
{
    use HasFactory;

    protected $fillable = [
        'result',
        'alternative_id',
        'random_token',
    ];

    public function Alternative(): BelongsTo
    {
        return $this->belongsTo(Alternative::class);
    }
}
