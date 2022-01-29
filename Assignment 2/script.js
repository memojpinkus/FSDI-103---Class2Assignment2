let productName = prompt("Enter the product name:");
let productPrice = prompt("Enter the product's price:");
let productQty = prompt("Enter the quantity of the product:");

console.log(`Product: ${productName}`);
console.log(`Product price: ${productPrice}`);
console.log(`Quantity: ${productQty}`);
console.log(`Final price: ${(productPrice*productQty)*1.16}`);