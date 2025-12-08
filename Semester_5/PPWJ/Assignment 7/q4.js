let students = ["Ali", "Meera", "Ravi", "Ali", "Sara"];
let allStrings = students.every(function(name) {
    return typeof name === 'string';
});
console.log(allStrings);
students.copyWithin(0, 2);
students[0] = "Guest1";
students[1] = "Guest2";
console.log(students);