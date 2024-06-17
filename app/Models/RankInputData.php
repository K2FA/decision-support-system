<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RankInputData extends Model
{
    use HasFactory;

    protected $fillable = [
        'rank_input_id',
        'subcriteria',
        'value',
        'random_token',
    ];

    public function RankInput(): BelongsTo
    {
        return $this->belongsTo(RankInput::class);
    }
}
