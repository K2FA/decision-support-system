<?php

use App\Models\RankInput;
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
        Schema::create('rank_input_data', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(RankInput::class);
            $table->string('subcriteria');
            $table->double('value');
            $table->string('random_token');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rank_input_data');
    }
};
