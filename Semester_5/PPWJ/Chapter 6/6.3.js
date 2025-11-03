let num1 = 10;
let num2 = 5;
let operator = '+';

function calculate(a, b, op) {
    if (op === '-') {
        return a - b;
    } else {
        return a + b;
    }
}

console.log(calculate(num1, num2, operator));

operator = '-';
console.log(calculate(num1, num2, operator));
