// Math Object Methods and Properties

// prints the number of PI
console.log('Print number of PI');
console.log(Math.PI);

// removes numbers after decimal point
console.log('Truncating the number of PI');
console.log(Math.trunc(Math.PI));

console.log('Math.round() with 3.49, 3.5, 3.51');
console.log(Math.round(3.49));
console.log(Math.round(3.5));
console.log(Math.round(3.51));

console.log('Math.ceil() with 3.3');
console.log(Math.ceil(3.3));

console.log('Math.floor() with 3.3');
console.log(Math.floor(3.3));

console.log('5 to the power of 2');
console.log(Math.pow(5,2));

console.log('Math.min(2,5,9)');
console.log(Math.min(2,5,9));

console.log('Math.max(2,5,9)');
console.log(Math.max(2,5,9));

// The Math.random() function in JavaScript generates a 
// random floating-point number between 0.0  and 0.999... (0.99 repeating)
// can not generate 1
// However we can always use this method as our base and manipulate it,
// by multiplying its result value or adding and so on...
console.log('Math.random()');

// Example (Generating a number from 1 to 10)
// IMPORTANT: Always use Math.floor to generate number from 1 to 10, instead of Math.ceil
// because your chance of generating 0 is very low
console.log(Math.floor(Math.random() * 10) + 1);