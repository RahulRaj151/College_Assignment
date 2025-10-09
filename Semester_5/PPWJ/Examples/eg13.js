
let prize = prompt("Select a number between 0 and 10:");

let prizeNum = Number(prize);

let outputMessage = "My Selection: ";

let prizeString = "";

switch (prizeNum) {
    case 0:
    case 1:
        prizeString = "You won a candy bar!";
        break;
    case 2:
    case 3:
        prizeString = "You won a small toy!";
        break;
    case 4:
    case 5:
        prizeString = "You won a book!";
        break;
    case 6:
    case 7:
        prizeString = "You won a gift card!";
        break;
    case 8:
    case 9:
        prizeString = "You won a gadget!";
        break;
    case 10:
        prizeString = "You won the grand prize!";
        break;
    default:
        prizeString = "Invalid selection, no prize.";
}
console.log(outputMessage + prizeString);
