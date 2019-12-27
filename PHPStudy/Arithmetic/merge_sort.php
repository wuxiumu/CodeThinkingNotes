<?php
function mergeSort($arr){
    $len = count($arr);
    if($len < 2){
        return $arr;
    }
    $middle = floor($len/2);
    $left = array_slice($arr, 0 ,$middle);
    $right = array_slice($arr, $middle);
    return merge(mergeSort($left), mergeSort($right));
}

function merge($left, $right){
    $result = [];

    while(count($left) > 0 && count($right) > 0){
        if($left[0] <= $right[0]){
            $result[] = array_shift($left);
        }else{
            $result[] = array_shift($right);
        }
    }

    while(count($left))
        $result[] = array_shift($left);

    while(count($right))        
        $result[] = array_shift($right);

    return $result;            
}