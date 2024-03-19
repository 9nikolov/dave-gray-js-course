// IMPORTANT: When we update an array by either adding or removing elements from it
// the positions of the elements change

// Arrays
const  myArray = [];
const myArray2 = [];
const myArray3 = [1,999,420,69,9,14,3,1000,777];

// add elements to an array,
// by referencing the position they are in, in the array
myArray[0] = "Dave";
myArray[1] = true;
myArray[2] = 2093;

myArray2[0] = "adidas";
myArray2[1] = 'puma';
myArray2[2] = 'reebok';
myArray2[3] = 'nike';

// adding an element to the end of the array
myArray.push("school");

console.log(myArray)

// remove last element from array
myArray.pop();

console.log(myArray);

// pop() function also returns the removed last element from the array,
// thus if we use a variable we can catch the removed element and save it
const lastItem = myArray2.pop();

console.log(`myArray2 content after pop():`);
console.log(myArray2);
console.log(`the item we removed from the array using pop():\n\'${lastItem}\'`);

// adding an element to the start of the array
// unshift() function also returns the new length of the array after we insert the new element
// if we use a variable we can save the return value of unshift(), 
// which as we said before is the length of the array
const newLength = myArray3.unshift(22222);

console.log(myArray3);

// removing the first element of an aray
// shift() function also returns the removed first element from the array,
// thus if we use a variable we can catch the removed element and save it
const firstItem = myArray3.shift();

// printing the updated array
console.log(myArray3);
// printing the first element we removed from the array
console.log(firstItem);