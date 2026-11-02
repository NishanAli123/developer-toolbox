# map Function

The **map()** method is an array method used to transform each element of an array
and returns a new array containing the transformed elements.

## Example
```javascript
const prices= [40,50,500,100,250]

const discountPrices=prices.map(price=>price*0.5)

console.log(prices);
console.log(discountPrices);
```
*
OUTPUT
[40, 50, 500, 100, 250]

[20, 25, 250, 50, 125]
*
