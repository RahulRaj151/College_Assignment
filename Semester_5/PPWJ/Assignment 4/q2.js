let age = parseInt(prompt("Enter your age:"));
let category;
let price;

if (age < 12) {
    category = "Child";
    price = 5;
} else if (age < 18) {
    category = "Teen";
    price = 10;
} else if (age < 60) {
    category = "Adult";
    price = 20;
} else {
    category = "Senior";
    price = 15;
}

alert(`Category: ${category}\nTicket Price: Rs.${price}`);