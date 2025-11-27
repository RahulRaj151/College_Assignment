let inventory = [
    { name: "Item1", quantity: 5, price: 100 },
    { name: "Item2", quantity: 15, price: 200 },
    { name: "Item3", quantity: 8, price: 150 },
    { name: "Item4", quantity: 20, price: 300 }
];

let lowQuantityItems = [];
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].quantity < 10) {
        lowQuantityItems.push(inventory[i]);
    }
}
console.log("Items with quantity less than 10:", lowQuantityItems);

for (let i = 0; i < inventory.length - 1; i++) {
    for (let j = 0; j < inventory.length - 1 - i; j++) {
        if (inventory[j].price > inventory[j + 1].price) {
            let temp = inventory[j];
            inventory[j] = inventory[j + 1];
            inventory[j + 1] = temp;
        }
    }
}
console.log("Items sorted by price:", inventory);

let itemNames = [];
for (let i = 0; i < inventory.length; i++) {
    itemNames.push(inventory[i].name);
}
console.log("Item names:", itemNames);

inventory.push({ name: "Item5", quantity: 12, price: 2500 });
console.log("Updated inventory:", inventory);
