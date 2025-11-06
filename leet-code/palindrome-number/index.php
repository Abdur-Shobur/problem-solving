<?php

function palindrome($x)
{

    if ($x < 0) {
        return false;
    }

    // to string
    $original = strval($x);
    $left     = 0;
    $right    = strlen($original) - 1;

    while ($left <= $right) {
        if ($original[$left] !== $original[$right]) {
            return false;
        }
        $left++;
        $right--;
    }

    return true;

}

// test
$x      = 121;
$result = palindrome($x);

echo $result ? 'true' : 'false';
