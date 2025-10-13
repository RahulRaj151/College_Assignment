let purchaseAmount = parseFloat(prompt("Enter the total purchase amount:"));
let discount = 0;
let finalPrice;

if (purchaseAmount < 0) {
    alert("Invalid input! Purchase amount cannot be negative.");
} else {
    if (purchaseAmount >= 100) {
        discount = 20;
    } else if (purchaseAmount >= 50) {
        discount = 10;
    }
    finalPrice = purchaseAmount - discount;
    alert(`Discount: Rs.${discount}\nFinal Price: Rs.${finalPrice}\nSavings: Rs.${discount}`);
}
