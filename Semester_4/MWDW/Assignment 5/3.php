<?php
function findLCM($num1, $num2) {
    function findGCD($a, $b) {
        while ($b != 0) {
            $temp = $b;
            $b = $a % $b;
            $a = $temp;
        }
        return $a;
    }
    
    $gcd = findGCD($num1, $num2);
    $lcm = ($num1 * $num2) / $gcd;
    return $lcm;
}

$number1 = 12;
$number2 = 18;

echo "LCM of $number1 and $number2 is: " . findLCM($number1, $number2);
?>