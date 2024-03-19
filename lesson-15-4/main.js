const  myArray = ['a','b','c','d','e','f'];

// This code creates a new array called newArray by using the slice method on the original myArray. 
// The slice method extracts a portion of the original array starting from the index specified (in this case, 2)
// and returns a new array containing the extracted elements. 
// So, newArray will contain elements from index 2 to the end of the original myArray: ['c', 'd', 'e', 'f'].
const newArray = myArray.slice(2);
console.log(newArray);

// reverse the array
myArray.reverse();
console.log(myArray);

// get all the elements from the array and combines them into 1 string
const newString = myArray.join();
console.log(newString);
// you can also remove the comma like this and get one combined string
const newStringNoComma = myArray.join('');
console.log(newStringNoComma);
// or as you probably guessed already, you can choose another seperator
const newStringCustomSeperator = myArray.join('...');
console.log(newStringCustomSeperator);