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
        Schema::create('devide_ranks', function (Blueprint $table) {
            $table->id();
            $table->double('result');
            $table->foreignIdFor(Criteria::class);
            $table->foreignIdFor(Alternative::class);
            $table->string('random_token');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('devide_ranks');
    }
};
