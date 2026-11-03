# spread Operator

Spread operator **(...)** is used to expand the elements of an iterable (such as an array) or the properties of an object. It allows us to create copies, combine arrays or objects, add elements, and update properties without directly modifying the original array or object.


## practice exercises

1. Combine two arrays  

```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
```
Task: Use the spread operator to combine both arrays into a new array called fullStack.

*Answer*
```javascript
const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];
const fullStack = [...frontend,...backend]

console.log(fullStack)
```

2. Copy an array and add elements

```javascript
const numbers = [10, 20, 30];
```
Task: Create a new array called updatedNumbers containing the original elements plus 40 and 50.

*Answer*
```javascript
const numbers = [10, 20, 30];
const updatedNumbers = [...numbers,40,50]

console.log(updatedNumbers)

```

3. Update an object

```javascript
const employee = {
    name: "Rahul",
    age: 25,
    position: "Frontend Developer"
};
```
Task: Create a new object called updatedEmployee with:
- All the existing properties.
- Age updated to 26.
- A new property city with the value "Kochi".

*Answer*
```javascript
const employee = {
    name: "Rahul",
    age: 25,
    position: "Frontend Developer"
};
const updatedEmployee = {
  ...employee,
  age: 26,
  city: "Kochi"
}

console.log(updatedEmployee);
```