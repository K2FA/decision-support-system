<?php

namespace App\Helper;

use Illuminate\Http\Request;

class AuthCheck 
{
  public static function usercheck(Request $request)
  {
    return $request->user()->hasRole('User')?'/user/test': null;
  }


  public static function adminCheck(Request $request)
  {
    return $request->user()->hasRole('Admin')?'/table/goal': null;
  }
}