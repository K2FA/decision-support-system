<?php

use App\Models\CriteriaInput;
use App\Models\User;
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
            $table->foreignIdFor(CriteriaInput::class);
            $table->double('value');
            $table->string('label');
            $table->foreignIdFor(User::class);
            $table->string('random_token', 32);
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
