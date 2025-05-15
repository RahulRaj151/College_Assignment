<?php
function subtract($num1, $num2) {
    return $num1 - $num2;
}

// HTML form for user input
echo "<form method='post'>
    Number 1: <input type='number' name='num1' required><br><br>
    Number 2: <input type='number' name='num2' required><br><br>
    <input type='submit' value='Calculate'>
</form>";

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $result = subtract($num1, $num2);
    echo "<br>Result of $num1 - $num2 = $result";
}
?>