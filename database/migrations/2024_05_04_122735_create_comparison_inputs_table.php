<?php

use App\Models\ComparisonInput;
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
        Schema::create('comparison_inputs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(ComparisonInput::class);
            $table->double('comparison');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comparison_inputs');
    }
};
