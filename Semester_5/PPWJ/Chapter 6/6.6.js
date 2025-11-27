let value = "1000";
(function() {
    let value = "2000";
    console.log("Inside first IIFE, local value:", value);
})();
const result = (function() {
    let value = "3000"; 
    return value;
})();

console.log("Result from second IIFE (result):", result);
console.log("Outer variable value now:", value);

const printValue = function(newValue) {
    let value = newValue; 
    console.log("Inside anonymous function, the value is: " + value);
};
printValue("4000");