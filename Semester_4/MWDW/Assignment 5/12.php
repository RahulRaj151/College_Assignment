<?php
function triangleArea($base, $height) {
    return 0.5 * $base * $height;
}

function rectangleArea($length, $width) {
    return $length * $width;
}

function squareArea($side) {
    return $side * $side;
}

function circleArea($radius) {
    return pi() * $radius * $radius;
}

// Example usage
$triangleBase = 10;
$triangleHeight = 8;
$rectangleLength = 12;
$rectangleWidth = 6;
$squareSide = 5;
$circleRadius = 7;

echo "Area of Triangle (base=$triangleBase, height=$triangleHeight): " . triangleArea($triangleBase, $triangleHeight) . "<br>";
echo "Area of Rectangle (length=$rectangleLength, width=$rectangleWidth): " . rectangleArea($rectangleLength, $rectangleWidth) . "<br>";
echo "Area of Square (side=$squareSide): " . squareArea($squareSide) . "<br>";
echo "Area of Circle (radius=$circleRadius): " . number_format(circleArea($circleRadius), 2) . "<br>";
?>