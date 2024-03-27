<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Natural extends Model
{
    use HasFactory;

    protected $fillable = [
        'criteria_id',
        'subcriteria',
        'weight',
    ];

    public function Criteria():BelongsTo
    {
        return $this->belongsTo(Criteria::class);
    }
}
