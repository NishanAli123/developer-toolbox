# Rest Operator

The Rest operator is used to collect multiple elements or properties and group them into a single array or object.
Here's the interesting part: Rest and Spread use exactly the same three dots (...), but they do opposite things.
- Spread → expands elements.
- Rest → collects elements.

## Example
1. Rest parameters in functions
```javascript
function add(...numbers) {
    console.log(numbers);
}

add(10, 20, 30, 40, 50);
```
2. Rest with array destructuring
```javascript
const languages = ["JavaScript", "Python", "Java", "C++", "PHP"];

const [first, second, ...remaining] = languages;

console.log(first);
console.log(second);
console.log(remaining);
```
*Output* 
```plaintext
JavaScript
Python
["Java", "C++", "PHP"]
```

