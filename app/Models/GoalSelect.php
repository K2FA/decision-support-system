<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class GoalSelect extends Model
{
    use HasFactory;

    protected $fillable = [
        'goal_id',
    ];

    public function Goal(): BelongsTo
    {
        return $this->belongsTo(Goal::class);
    }
}
