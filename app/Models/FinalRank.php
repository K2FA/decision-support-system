<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FinalRank extends Model
{
    use HasFactory;

    protected $fillable = [
        'rank',
        'alternative_id',
        'goal_select_id',
        'comparison_input_id',
        'result',
        'random_token',
    ];

    public function Alternative(): BelongsTo
    {
        return $this->belongsTo(Alternative::class);
    }

    public function GoalSelect(): BelongsTo
    {
        return $this->belongsTo(GoalSelect::class);
    }

    public function ComparisonInput(): BelongsTo
    {
        return $this->belongsTo(ComparisonInput::class);
    }
}
