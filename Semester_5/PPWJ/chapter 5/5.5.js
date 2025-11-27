let grid = [];
const numCells = 64;
let counter = 0;
let row = [];
for (let i = 0; i <= numCells; i++) {
  if (counter % 8 === 0) {
    if (row.length > 0) {
      grid.push(row);
    }
    row = [];
  }
  counter++;
  let temp = counter;
  row.push(temp);
}
console.log(grid);