<?php

function twoSum(array $nums, int $target): array
{
    $numMap = [];

    foreach ($nums as $i => $num) {
        $complement = $target - $num;

        if (isset($numMap[$complement])) {
            return [$numMap[$complement], $i];
        }

        $numMap[$num] = $i;
    }

    return [];
}
$nums   = [2, 7, 11, 15];
$target = 9;
$result = twoSum($nums, $target);
print_r($result);
