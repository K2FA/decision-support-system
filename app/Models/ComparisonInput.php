<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ComparisonInput extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_input_id',
        'comparison',
        'user_id',
        'random_token'
    ];

    public function CriteriaInput(): BelongsTo
    {
        return $this->belongsTo(CriteriaInput::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
