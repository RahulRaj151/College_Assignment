// Ask the user to enter a name
let userName = prompt("Enter a name:");

// Use switch statement to check if the name is known
switch (userName) {
    case "Rahul":
    case "Raj":
    case "Eren Yeager":
    case "lelouch":
        console.log(userName + " is a friend.");
        break;
    default:
        console.log("I don't know " + userName);
        break;
}
