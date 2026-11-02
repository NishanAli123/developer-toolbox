# forEach Function

The **forEach()** method is an array method that executes a provided callback function once for each element in an array.

## Syntax

```javascript
array.forEach(function(element, index, array) {
    code to run for each element
});
```
## Example

```javascript
let names = ["john", "Nishan", "muhammed"]

names.forEach((name)=>{
  console.log("my name is "+name)
})
```
