<?php

// 严格模式
// declare(strict_types=1);

// 强制模式
function sum(int ...$ints)
{
   return array_sum($ints);
}

print(sum(2, '3', 4.1));