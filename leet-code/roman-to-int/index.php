<?php
function romanToInt($s)
{
    $map = [
        'I' => 1,
        'V' => 5,
        'X' => 10,
        'L' => 50,
        'C' => 100,
        'D' => 500,
        'M' => 1000,
    ];

    $result        = 0;
    $length        = strlen($s);
    $previousValue = 0;

    for ($i = $length - 1; $i >= 0; $i--) {
        $currentValue = $map[$s[$i]];

        if ($currentValue < $previousValue) {
            $result -= $currentValue;
        } else {
            $result += $currentValue;
        }

        $previousValue = $currentValue;
    }

    return $result;
}

// Example usage:
$romanNumeral = "MCMXCIV";
$integerValue = romanToInt($romanNumeral);
echo "The integer value of the Roman numeral $romanNumeral is $integerValue.\n"; // Output: 1994
