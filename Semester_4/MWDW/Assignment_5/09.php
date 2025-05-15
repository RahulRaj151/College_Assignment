<?php
$students = array(
    "John" => array("Math" => 85, "Science" => 92, "English" => 78, "History" => 88, "Computer" => 95),
    "Emma" => array("Math" => 90, "Science" => 85, "English" => 92, "History" => 78, "Computer" => 88),
    "Michael" => array("Math" => 78, "Science" => 88, "English" => 85, "History" => 92, "Computer" => 80)
);

foreach ($students as $name => $subjects) {
    $total = array_sum($subjects);
    echo "$name's total marks: $total<br>";
}
?>
