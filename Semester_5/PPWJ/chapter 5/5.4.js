let myTable = [];

let numRows = 3; 
let numCols = 4;

let counter = 0;

for (let i = 0; i < numRows; i++) {
    let tempTable = [];

    for (let j = 0; j < numCols; j++) {
        counter++;

        tempTable.push(counter);
    }

    myTable.push(tempTable);
}

console.table(myTable);
