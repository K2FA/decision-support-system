<?php

namespace App\Helper;

class ReverseHelper
{
  public static function count(array $number): float
  {
    $count = count($number);
    $product = array_product($number);

    $pow = pow($product, 1 / $count);

    return number_format($pow, 3);
  }
}
