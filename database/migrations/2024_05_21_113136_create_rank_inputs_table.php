<?php

use App\Models\Alternative;
use App\Models\Criteria;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('rank_inputs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Criteria::class);
            $table->foreignIdFor(Alternative::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rank_inputs');
    }
};
