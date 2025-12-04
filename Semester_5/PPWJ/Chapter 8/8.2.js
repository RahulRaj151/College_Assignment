let names = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike", "Laurence", "Mike", "Laurence", "Mike"];

let uniqueNames = names.filter(function(value, index, array) {
    console.log("Index:", index, "Value:", value, "First index of value:", array.indexOf(value));
    
    return index === array.indexOf(value);
});

console.log("Unique names:", uniqueNames);
