// Functions - reusable piece of code

// Methods = JavaScript Built-in Functions! 
// (those functions come already prewritten for us to use with the language itself)

// Function Declaration Syntax:
function sum(){
  return 2 + 2;
}
// Printing the result of the function we created
console.log(sum());

// Functions with Parameters
function sum2(n1, n2){
  return n1 + n2;
}
// Printing the result of the function we created
console.log(sum2(12,92));

// When a function parameter is missing it will return undefined
// however we can make a conditional statement and catch it
function sum3(n1,n2) {
  if(n1===undefined){
    return n2;
  }else if(n2==undefined){
    return n1;
  }
  console.log(n1);
  console.log(n2);
  return `${n1} + ${n2} = ${n1+n2}`;
}
// Printing the result of the function we created
console.log(sum3(80,75));

// Anonymous Functions
// functions without a name
  // function (name){
  //   return name.toUpperCase();
  // }
// thus we save their return values in a variable
// IMPORTANT: which in the end basically creates a normal function with just using a different syntax
const functionResult = function (name){
  return name.toUpperCase();
}
// Printing the result of the anonymous function we created
console.log(functionResult('nikola'));

// IMPORTANT: 
// These two will do the same thing:
// so called "anonymous function"
// const functionResult = function (name){
//   return name.toUpperCase();
// }
// so called "normal function"
// function functionResult(name){
//   return name.toUpperCase();
// }

// Arrow Functions
// IMPORTANT: Arrow functions are similar to anonymous functions but with some differences,
// especially regarding the "this" keyword (MORE ON THIS IN LESSON 14, where we talk about SCOPE)
const arrowFunction = (name) => {
  return name.toUpperCase();
}