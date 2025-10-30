let rows = 5;
let output = "";

for (let i = 0; i < rows; i++) {
  let spaces = "";
  for (let s = 0; s < rows - i - 1; s++) {
    spaces += " ";
  }
  let row = "";
  for (let j = 0; j <= i; j++) {
    let coeff = 1;
    for (let k = 1; k <= j; k++) {
      coeff = coeff * (i - k + 1) / k;
    }
    row += coeff + " ";
  }
  console.log(spaces + row.trim());
}
