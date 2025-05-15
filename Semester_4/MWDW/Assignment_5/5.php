<?php
function isLeapYear($year) {
    if ((($year % 4 == 0) && ($year % 100 != 0)) || ($year % 400 == 0)) {
        return true;
    }
    return false;
}

$year = 2024; // Example year

if (isLeapYear($year)) {
    echo "$year is a leap year";
} else {
    echo "$year is not a leap year";
}
?>