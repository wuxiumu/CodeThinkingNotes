<?php
function selectionSort($arr){
    $len = count($arr);
    for($i = 0; $i < $len - 1; $i++){
        $minIndex = $i;
        for($j = $i + 1; $j < $len; $j++){
            if($arr[$j] < $arr[$minIndex]){
                $minIndex = $j;
            }
        }
        $temp = $arr[$i];
        $arr[$i] = $arr[$minIndex];
        $arr[$minIndex] = $temp;
    }
    return $arr;
}