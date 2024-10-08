<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        try {
            $request->authenticate();

            $request->session()->regenerate();

            /** TODO: if user role == user redirect to site '/user/dashboard' */
            // dd(
            //     $request->user(),
            //     $request->user()->hasRole('User'),
            //     auth()->user()->hasRole('User'),
            // );
            if ($request->user()->hasRole("User")) {
                return redirect()->intended('/user/pilih-tujuan')->with('success', 'Login berhasil Dilakukan');
            }


            return redirect()->intended(RouteServiceProvider::HOME)->with('success', 'Login berhasil Dilakukan');
        } catch (ValidationException $error) {
            return back()->withErrors([
                'general' => 'Email atau Password Salah!!!',
            ])->withInput();
        }
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
