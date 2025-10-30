let code = parseInt(prompt("Enter the code"));
let num = code;
let digitSum = 0;
while (num > 0) {
  digitSum += num % 10;
  num = Math.floor(num / 10);
}

let primeCheck = true;
if (digitSum <= 1) {
  primeCheck = false;
} else if (digitSum <= 3) {
  primeCheck = true;
} else if (digitSum % 2 === 0 || digitSum % 3 === 0) {
  primeCheck = false;
} else {
  for (let i = 5; i * i <= digitSum; i += 6) {
    if (digitSum % i === 0 || digitSum % (i + 2) === 0) {
      primeCheck = false;
      break;
    }
  }
}

let output = "";
output += "Original number entered: " + code + "\n";
output += "Sum of its digits: " + digitSum + "\n";
output += "Is the sum a prime number? " + (primeCheck ? "Yes" : "No");
console.log(output);


