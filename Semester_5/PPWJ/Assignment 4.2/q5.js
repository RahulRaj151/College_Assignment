let marks = [
    [85, 90, 88],
    [78, 82, 85], 
    [92, 88, 91]  
];

for (let i = 0; i < marks.length; i++) {
    let total = 0;
    for (let j = 0; j < marks[i].length; j++) {
        total += marks[i][j];
    }
    console.log(`Total marks for Student ${i + 1}: ${total}`);
}