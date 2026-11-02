//To filter items matching a specific condition in an array

const products = [
  { name: "T-Shirt", price: 499, colour: "Blue" },
  { name: "Jeans", price: 1299, colour: "Black" },
  { name: "Sneakers", price: 2499, colour: "White" },
  { name: "Backpack", price: 899, colour: "Red" },
  { name: "Cap", price: 299, colour: "Green" },
  { name: "Hoodie", price: 1599, colour: "Grey" },
  { name: "Watch", price: 1999, colour: "Black" }
];

const premiumProducts = products.filter(product=>product.price>1000);

console.log(premiumProducts);