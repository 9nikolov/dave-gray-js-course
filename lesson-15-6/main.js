const myArray1 = ["A","B","C"];
const myArray2 = ["D","E","F"];

// This line creates a new array called newArray by concatenating (joining together)
// the elements of myArray1 and myArray2.
const newArray = myArray1.concat(myArray2);
console.log(newArray);

// spread operator (...) - newer alternative to concat() method
const newArray2 = [...myArray1, ...myArray2];
console.log(newArray2);