// JavaScript Modules

// 1. Exporting and importing classes
// in this file we will import a class
// to see how to export go to ("person.js")

// 2. When examining the code in './person.js',
// you'll notice that the class is named "person",
// but during import I actually named it "Person498".
// Importing classes is different from importing functions:
// With classes, we can directly choose the name during import.
// Also, if the class is a Default Export, we can still change the name during import.
// However, a function that is a default export cannot be renamed.
// For functions that are named exports, we must import them using their original name first,
// then we have the ability to rename them.
import Person498 from './person.js';

// creating an instance of the imported class
const me = new Person498();

// printing the object in the console
console.log(me);




