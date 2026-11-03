# reduce Function

The **reduce()** array method is used to combine many items into one result.

## Example challenge-1

_Question_ :-Calculate the total shopping bill
You have an array of shopping items with their prices:

```javascript
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 800 },
  { item: "Keyboard", price: 1500 },
  { item: "Monitor", price: 12000 },
  { item: "Headphones", price: 2500 },
];
```

_Answer_

const cart = [
{ item: "Laptop", price: 50000 },
{ item: "Mouse", price: 800 },
{ item: "Keyboard", price: 1500 },
{ item: "Monitor", price: 12000 },
{ item: "Headphones", price: 2500 }
];

let totalPrice = cart.reduce((total,item)=>total + item.price,0);

console.log(totalPrice);

## Example challenge-2

_Question_ :-You have the following array:
Task: Use reduce() to calculate the sum of only the even numbers.

```javascript
const numbers = [10, 20, 30, 40, 50, 60];
```

```javascript
const numbers = [10, 20, 30, 40, 50, 60];

let sumOfEven = numbers.reduce((sum, num) => {
  if (num % 2 === 0) sum += num;
  return sum;
}, 0);

console.log(sumOfEven);
```
