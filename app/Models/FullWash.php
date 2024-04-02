<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class FullWash extends Model
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

    public function Weight():HasOne
    {
        return $this->hasOne(Weight::class);
    }
}
