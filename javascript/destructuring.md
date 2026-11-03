# Javascript Destructuring

**Destructuring** is a javascript feature allow to **extract values** from **Array** and **object** and store them in separate **variables**


There are two main types:

1. Array destructuring
2. Object destructuring

3. Array destructuring

suppose you have an array:

```javascript
const fruits = ["Apple", "Banana", "Orange"];
```

Normally, you access the elements like this:

```javascript
const first = fruits[0];
const second = fruits[1];
const third = fruits[2];

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Orange
```

Using destructuring, you can do the same thing much more easily:

```javascript
const [first, second, third] = fruits;

console.log(first); // Apple
console.log(second); // Banana
console.log(third); // Orange
```

## Syntax

```javascript
const [variable1, variable2, variable3] = array;
```

2. Object destructuring

Now consider an object:

```javascript
const student = {
  name: "Nishan",
  age: 24,
  course: "Computer Science",
};
```

Normally, you access its properties like this:

```javascript
const name = student.name;
const age = student.age;
const course = student.course;
```

Using destructuring:

```javascript
const { name, age, course } = student;

console.log(name); // Nishan
console.log(age); // 24
console.log(course); // Computer Science
```

## Syntax

```javascript
const { property1, property2 } = object;
```

## Bonus: Renaming variables

You can also give extracted properties different variable names.

```javascript
const { name: studentName, age: studentAge } = student;

console.log(studentName); // Nishan
console.log(studentAge); // 24
```

## Challenge 1: Array destructuring

```javascript
const programmingLanguages = ["JavaScript", "Python", "Java", "C++", "PHP"];

const [firstLanguage, , thirdLanguage, , fifthLanguage] = programmingLanguages;

console.log(firstLanguage, thirdLanguage, fifthLanguage);
```

## Challenge 2: Object destructuring

```javascript
const employee = {
  name: "Rahul",
  age: 25,
  position: "Frontend Developer",
  salary: 30000,
};

const { name: employeeName, position: jobRole } = employee;

console.log(employeeName, jobRole);
```
