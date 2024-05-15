<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class TfnInput extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_input_id',
        'result',
        'random_token',
        'tfn',
    ];


    // public function Criteria_Input(): BelongsTo
    public function criteria_input(): BelongsTo
    {
        return $this->belongsTo(CriteriaInput::class);
    }
}
