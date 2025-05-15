<?php
function convertDays($total_days) {
    $years = floor($total_days / 365);
    $remaining_days = $total_days % 365;
    
    $months = floor($remaining_days / 30);
    $days = $remaining_days % 30;
    
    echo "$total_days days = ";
    echo "$years years, $months months, and $days days";
}

$total_days = 756; // Example number of days
convertDays($total_days);
?>