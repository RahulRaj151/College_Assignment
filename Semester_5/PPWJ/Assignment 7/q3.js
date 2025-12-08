let cart = ["Shoes", "Shoes", "Bag", "Watch", "Shoes", "Bag"];
let uniqueCart = cart.filter(function(item, index) {
    return cart.indexOf(item) === index;
});
console.log(uniqueCart);
