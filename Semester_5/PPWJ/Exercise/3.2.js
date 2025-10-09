let shoppingList = [];
console.log(shoppingList);

shoppingList.push("Milk", "Bread", "Apples");
console.log(shoppingList);

let breadIndex = shoppingList.indexOf("Bread");
shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
console.log(shoppingList);

let removedItem = shoppingList.pop();
console.log(removedItem);
console.log(shoppingList);

shoppingList.sort();

let milkIndex = shoppingList.indexOf("Milk");
console.log(milkIndex);
console.log(shoppingList);

let bananasIndex = shoppingList.indexOf("Bananas");
shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
console.log(shoppingList);

let newList = ["Juice", "Pop"];

shoppingList = shoppingList.concat(newList, newList);
console.log(shoppingList);

let lastPopIndex = shoppingList.lastIndexOf("Pop");
console.log(lastPopIndex);

console.log(shoppingList);