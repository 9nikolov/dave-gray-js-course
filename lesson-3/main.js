// using const, because we don't want
// the variable to have a reassignable value
const myVariable = 'Persona 3, Persona 4, Persona 5';

// .length property
// (i know what you are thinking, isnt that a method,
// the answer is no - this is not java, 
// length is not a method here, its a property)
console.log(myVariable.length);

// as with all programming languages we count from 0
console.log(myVariable.charAt(3));

console.log(myVariable.indexOf('Per'));

console.log(myVariable.lastIndexOf('Per'));

console.log(myVariable.slice(3,20));

console.log(myVariable.toLocaleLowerCase());

console.log(myVariable.toUpperCase());

console.log(myVariable.includes(3));

console.log(myVariable.split(','))