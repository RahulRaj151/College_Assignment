let pin = parseInt(prompt("Enter the Pin: "));

let revpin = 0;
let str = pin.toString();
for (let i = str.length - 1; i >= 0; i--) {
  revpin = revpin * 10 + parseInt(str[i]);
}

let output = "";
output += "Original number (PIN): " + pin + "\n";
output += "Reversed number (Reversed PIN): " + revpin;
console.log(output);
