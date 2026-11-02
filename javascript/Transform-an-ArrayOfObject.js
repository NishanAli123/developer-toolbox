const products = [
  { name: "T-Shirt", price: 499, colour: "Blue" },
  { name: "Jeans", price: 1299, colour: "Black" },
  { name: "Sneakers", price: 2499, colour: "White" },
  { name: "Backpack", price: 899, colour: "Red" },
  { name: "Cap", price: 299, colour: "Green" },
  { name: "Hoodie", price: 1599, colour: "Grey" },
  { name: "Watch", price: 1999, colour: "Black" }
];

//discount price 50% on products more than or equal to 1000 rupees and 25% dicount on products less than 1000 rupees

const discountedProducts=products.map((product)=>{
  return {
    ...product,
    price: product.price>=1000 ? product.price*0.5 : product.price*0.25

  };
})
console.log(discountedProducts);

//adding attribute category

const categorizedProducts = products.map(product =>{
  let category;
  if (product<100) category ="Budget"
  else if (product.price<500) category = "Mid-range";
  else category = "premium";
  return { ...product, category};
})

console.log(categorizedProducts);