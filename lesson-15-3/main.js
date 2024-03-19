const  myArray = [];
const myArray2 = [];
const myArray3 = ['tomato','cucumber','onion','vodka','balkan music','couch'];

myArray[0] = "Dave";
myArray[1] = true;
myArray[2] = 2093;

myArray2[0] = "adidas";
myArray2[1] = 'puma';
myArray2[2] = 'reebok';
myArray2[3] = 'nike';

// do not use this in most cases
// however you should know it exists and what it does
// this will delete the array element from the specified position,
// however, the position will be left empty, without any value
// thus this position in the array will have a value of undefined
delete myArray[0];

console.log(myArray);
console.log(myArray[0]);


console.log(myArray2);
// using splice() to:
// remove an element from an array
// this will remove 1 element, starting from position 2 in the array
myArray2.splice(2,1);
console.log(myArray2);

// using splice() to:
// replace an element from an array
// this will replace 1 element, starting from position 2 in the array, 
// with the value 'SKECHERS'
myArray2.splice(2,1, 'SKECHERS');
console.log(myArray2);

// using splice() to:
// add an element in the array in a specific position
// without replacing or removing other elements
console.log(myArray3);
myArray3.splice(2,0,'BALKAN WIFE');
console.log(myArray3);;