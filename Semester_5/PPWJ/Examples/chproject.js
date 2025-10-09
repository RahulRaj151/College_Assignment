let dynamicNum = Math.floor(Math.random() * 101);

let userInput = prompt("Enter a number: ");

let userNum = Number(userInput);

if (userNum > dynamicNum) {
    console.log("Your number " + userNum + " is greater than the dynamic number " + dynamicNum);
} else if (userNum < dynamicNum) {
    console.log("Your number " + userNum + " is less than the dynamic number " + dynamicNum);
} else {
    console.log("Your number " + userNum + " is equal to the dynamic number " + dynamicNum);
}
