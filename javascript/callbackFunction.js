// A callback function is a function that you pass as an argument to another function, so that the other function can call it later.

const fruits =["apple","mango","orange","banana"]

fruits.forEach((fruit)=>{
  console.log("This is "+fruit)
})

// Here (fruit)=>{ console.log("This is "+fruit)}; is the callback. You’re not calling it yourself. forEach calls it for you, once for each item.
 