<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CriteriaInput extends Model
{
    use HasFactory;

    protected $fillable = [
        'kriteria_id',
        'jenis',
    ];

    public function Criteria(): BelongsTo
    {
        return $this->belongsTo(Criteria::class, 'kriteria_id', 'id');
    }

    public function ComparisonInput(): HasMany
    {
        return $this->hasMany(ComparisonInput::class);
    }
}
