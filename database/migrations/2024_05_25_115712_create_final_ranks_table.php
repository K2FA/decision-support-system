<?php

use App\Models\Alternative;
use App\Models\ComparisonInput;
use App\Models\GoalSelect;
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
        Schema::create('final_ranks', function (Blueprint $table) {
            $table->id();
            $table->integer('rank');
            $table->foreignIdFor(Alternative::class);
            $table->foreignIdFor(GoalSelect::class);
            $table->foreignIdFor(ComparisonInput::class);
            $table->double('result');
            $table->string('random_token');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('final_ranks');
    }
};
