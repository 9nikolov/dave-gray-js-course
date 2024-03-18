// in the Console text is printed in white
// numbers are printed in purple

// int - whole number 
const myInt = 999;
// float - decimal point number 
const myFloat = 999.99;
// string
const myString = '999';

console.log(myInt === myString);

console.log(typeof(myInt));
console.log(typeof(myString));

// number function - convert string to a whole number
console.log('Parsed String to Int: ' + Number('999'));
// Number parsefloat() function - convert string to a float number
// parse means convert in programming context
console.log('Parsed String to Float: ' + Number.parseFloat('999.99'));

// trying to convert non number value to a number
// this will return type of NaN (not a number)
console.log(Number('Nikola'));

// in JS false = 0, true = 1 
console.log(Number(false));
console.log(Number(true));

// Number methods
console.log(Number.isInteger(myInt));

// method chaining
// (in real world we would not chain the methods below, however this is just an example)
console.log(Number.parseFloat('999').toFixed(2).toString());

// IMPORTANT: THESE TWO DO DIFFERENT THINGS
// Number.isNaN() vs isNaN() 
    // Number.isNaN('Dave') checks if the provided value is exactly NaN. It returns false because 'Dave' is not a numerical value.
    // isNaN('Dave') checks if the provided value can be converted to NaN. It returns true because 'Dave' cannot be converted to a number.
console.log(Number.isNaN('Dave'));
console.log(isNaN('Dave'));
