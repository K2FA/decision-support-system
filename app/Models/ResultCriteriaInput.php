<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ResultCriteriaInput extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_input_id',
        'result',
    ];

    public function CriteriaInput(): BelongsTo
    {
        return $this->belongsTo(CriteriaInput::class);
    }
}
