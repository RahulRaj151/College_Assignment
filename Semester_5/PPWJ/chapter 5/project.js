let table = [];
let values = 10;
for (let row = 1; row <= values; row++) {
    let temp = [];
    for (let col = 1; col <= values; col++) {
        temp.push(row * col);
    }
    table.push(temp);
}
console.log(table);