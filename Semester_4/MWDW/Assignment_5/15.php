<?php
function greetFriend($name) {
    echo "Hello, $name!";
}

// HTML form for name input
echo "<form method='post'>
    Enter your friend's name: <input type='text' name='friendName' required><br><br>
    <input type='submit' value='Greet'>
</form>";

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $friendName = $_POST['friendName'];
    greetFriend($friendName);
}
?>