<?php
// Pattern A - Alphabet Palindrome Pyramid
echo "Pattern A:\n";
$n = 5;
for ($i = 0; $i < $n; $i++) {
    for ($s = 0; $s < $n - $i - 1; $s++) {
        echo "  ";
    }
    for ($j = 0; $j <= $i; $j++) {
        echo chr(65 + $j) . " ";
    }
    for ($j = $i - 1; $j >= 0; $j--) {
        echo chr(65 + $j) . " ";
    }
    echo "\n";
}
// Pattern B - Star Diamond
echo "\nPattern B:\n";
$n = 5;
for ($i = 1; $i <= $n; $i++) {
    for ($s = 1; $s <= $n - $i; $s++) echo "  ";
    for ($j = 1; $j <= 2 * $i - 1; $j++) echo "* ";
    echo "\n";
}
for ($i = $n - 1; $i >= 1; $i--) {
    for ($s = 1; $s <= $n - $i; $s++) echo "  ";
    for ($j = 1; $j <= 2 * $i - 1; $j++) echo "* ";
    echo "\n";
}
// Pattern C - Hourglass Binary and Triangle
echo "Pattern C:\n";
$n = 8;
for ($i = 0; $i < $n; $i++) {
    echo "0 ";
}
echo "\n";
for ($i = 1; $i < $n; $i++) {
    echo str_repeat(" ", $i); // single space per level for symmetry
    for ($j = $i; $j < $n; $j++) {
        echo "1 ";
    }
    echo "\n";
}
for ($i = 2; $i <= $n; $i++) {
    echo str_repeat(" ", $n - $i); // leading spaces
    for ($j = 0; $j < $i; $j++) {
        echo "0 ";
    }
    echo "\n";
}
for ($i = 0; $i < $n; $i++) {
    echo "1 ";
}
echo "\n";
?>