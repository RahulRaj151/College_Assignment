const choices = ["Rock", "Paper", "Scissors"];

let player1 = Math.floor(Math.random() * 3);
let player2 = Math.floor(Math.random() * 3);

let choice1 = choices[player1];
let choice2 = choices[player2];

let result;
if (player1 === player2) {
    result = "It's a tie!";
} else if ((player1 === 0 && player2 === 2) || 
           (player1 === 1 && player2 === 0) ||
           (player1 === 2 && player2 === 1)) {
    result = "You win!";
} else {
    result = "Computer wins!";
}

console.log("Player 1: " + choice1 + " vs Player 2: " + choice2 + " - " + result);
