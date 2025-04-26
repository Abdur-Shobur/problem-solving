<?php
$my_array = [1, 4, 32, 25, 23, 252, 34, 26, 31, 2, 23, 45, 12, 34, 23, 4, 2, 12, 34, 3, 24, 22, 34, 3, 24];

function bubbleSort($array)
{

    $n = count($array);
    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - 1 - $i; $j++) {
            if ($array[$j] > $array[$j + 1]) {
                $temp          = $array[$j];
                $array[$j]     = $array[$j + 1];
                $array[$j + 1] = $temp;
            }
        }
    }
    return $array;
}

// $print = bubbleSort($my_array);
// echo implode(", ", $print);

function bubbleSortReverse($array)
{
    $n = count($array);

    for ($i = 0; $i < $n - 1; $i++) {
        for ($j = 0; $j < $n - 1 - $i; $j++) {
            if ($array[$j] < $array[$j + 1]) {
                $temp          = $array[$j];
                $array[$j]     = $array[$j + 1];
                $array[$j + 1] = $temp;
            }
        }

    }
    return $array;
}
$print = bubbleSortReverse($my_array);
echo implode(", ", $print);
