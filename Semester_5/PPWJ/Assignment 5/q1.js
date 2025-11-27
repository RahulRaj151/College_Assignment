function calculateTotal(discount = 0, ...cart) {
    let total = 0;
    for (let price of cart) {
        total += price;
    }
    let discountAmount = total * (discount / 100);
    return total - discountAmount;
}
console.log(calculateTotal(20,100,200,300));