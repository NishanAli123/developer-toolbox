//map is used to transform elements of an array into something new ,it returns a new array

const prices= [40,50,500,100,250]

const discountPrices=prices.map(price=>price*0.5)

console.log(prices);
console.log(discountPrices);