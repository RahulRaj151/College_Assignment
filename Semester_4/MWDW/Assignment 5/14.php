<?php
// Initial values
$a = 10;
$b = 20;

echo "Original numbers: a = $a, b = $b<br><br>";

// a) Using third variable
$temp = $a;
$a = $b;
$b = $temp;
echo "After swapping using third variable: a = $a, b = $b<br>";

// Reset values
$a = 10;
$b = 20;

// b) Without using third variable
$a = $a + $b;
$b = $a - $b;
$a = $a - $b;
echo "After swapping without third variable: a = $a, b = $b<br>";

// Reset values
$a = 10;
$b = 20;

// c) Using arithmetic operators (* and /)
$a = $a * $b;  // a = 200
$b = $a / $b;  // b = 10
$a = $a / $b;  // a = 20
echo "After swapping using multiplication and division: a = $a, b = $b<br>";
?>