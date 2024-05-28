<?php

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
        Schema::create('vektor_normalizations', function (Blueprint $table) {
            $table->id();
            $table->double('normalized');
            $table->double('total');
            $table->string('random_token');
            $table->foreignIdFor(Criteria::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vektor_normalizations');
    }
};
