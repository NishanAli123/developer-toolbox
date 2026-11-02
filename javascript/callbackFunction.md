
# Callback Function

A **callback function** is a function that you pass as an argument to another function, so that the other function can call it later.

## Example

```javascript
const fruits = ["apple", "mango", "orange", "banana"];

fruits.forEach((fruit) => {
    console.log("This is " + fruit);
});
```

## Explanation

Here, `(fruit) => { console.log("This is " + fruit) }` is the callback function.

You're not calling it yourself. `forEach()` calls it for you, once for each item in the array.
