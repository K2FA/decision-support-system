<?php

use App\Models\CriteriaInput;
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
        Schema::create('result_criteria_inputs', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(CriteriaInput::class);
            $table->double('result');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('result_criteria_inputs');
    }
};
