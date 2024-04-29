<?php

namespace app\Helper;

use App\Models\User;
use Illuminate\Http\Request;

class AuthChecker 
{
  public function check(Request $request)
  {
    return $request->user()->hasRole('User')?to_route('/user/test'): null;
  }
}