<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RankInput extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_id',
        'alternative_id',
    ];

    public function criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }

    public function alternative(): BelongsTo
    {
        return $this->belongsTo(Alternative::class);
    }
}
