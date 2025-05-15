<?php
$students = array("John", "Emma", "Michael", "Sarah", "David");

echo "Student Names:<br>";
for ($i = 0; $i < count($students); $i++) {
    echo ($i + 1) . ". " . $students[$i] . "<br>";
}
?>
