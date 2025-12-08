let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(function(num) {
return num * 2;
});
console.log(doubled);
let doubledArrow = numbers.map(num => num * 2);
console.log(doubledArrow);
