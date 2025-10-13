let rollNumber = parseInt(prompt("Enter your roll number:"));
if (rollNumber % 3 === 0 && rollNumber % 5 === 0) {
    alert("You qualify for the special relay race.");
} else {
    alert("You do not qualify for the special relay race.");
}
