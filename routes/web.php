<?php

use App\Http\Controllers\AlternativeController;
use App\Http\Controllers\ChangController;
use App\Http\Controllers\CriteriaController;
use App\Http\Controllers\FullWashController;
use App\Http\Controllers\GoalController;
use App\Http\Controllers\HoneyController;
use App\Http\Controllers\NaturalController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WeightController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });



// Route::get('/alternative', [GoalController::class,'create'])->middleware(['auth', 'verified'])->name('alternative');

Route::permanentRedirect('/', '/login');

Route::prefix('table')->group(function(){
    Route::resource('goal', GoalController::class)->only('index','create', 'store', 'update', 'destroy');
    Route::resource('alternative', AlternativeController::class)->only('index','create', 'store', 'update', 'destroy');
    Route::resource('criteria', CriteriaController::class)->only('index','create', 'store', 'update', 'destroy');
});

Route::prefix('bobot')->group(function(){
    Route::resource('natural', WeightController::class)->only('index');
    Route::resource('full-wash', WeightController::class)->only('index');
    Route::resource('honey', WeightController::class)->only('index');
});

Route::prefix('tfn')->group(function(){
    Route::resource('chang', ChangController::class)->only('index');
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
