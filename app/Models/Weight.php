<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Weight extends Model
{
    use HasFactory;

    protected $fillable = [
        'natural_id',
        'fullwash_id',
        'honey_id',
    ];

    public function Natural():BelongsTo
    {
        return $this->belongsTo(Natural::class);
    }

    public function FullWash():BelongsTo
    {
        return $this->belongsTo(FullWash::class);
    }

    public function Honey():BelongsTo
    {
        return $this->belongsTo(Honey::class);
    }
}
