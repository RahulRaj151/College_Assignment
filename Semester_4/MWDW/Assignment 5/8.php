<?php
$numbers = array(64, 34, 25, 12, 22, 11, 90);

echo "Original array: ";
foreach ($numbers as $number) {
    echo $number . " ";
}

sort($numbers);

echo "<br>Sorted array in ascending order: ";
foreach ($numbers as $number) {
    echo $number . " ";
}
?>