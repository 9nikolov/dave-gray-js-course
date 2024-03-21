// JavaScript Errors and Error Handling
// 1 - JS Strict Mode
// 2 - Types of Errors
// 3 - Catching Errors
// 4 - Printing Errors in different way via 
// console.log(error), console.warn(error), console.error(error), console.table(error)
// 5 - Printing Specific Error Properties
// console.error(err.message), console.error(err.stack)

"use strict";

// ReferenceError
// variable = "Dave";

// SyntaxError
// Object..create();

// TypeError
// const name = "Dave";
// name = "Joe";

const makeError = () =>{
  try{
    const name = "Dave";
    name = "Joe";
  }
  // often referred to as e, err, error
  catch(err){
    // logs the whole error like text
    console.log(err);
    // logs the whole error like a warning
    console.warn(err);
    // logs the whole error like an error
    console.error(err);
    // logs the whole error in table format
    console.table(err);

    // we can also pass specific properties of the Error Object
    // instead of the whole Error Object, like we did in the examples above
    
    // logs only the Error Message as an Error
    console.error(err.message);
    // logs only the Error Stack as an Error 
    console.error(err.stack);

    // In real world applications, you will probably want
    // to log the error messages with custom log functions
    // for example:
    // (this is not a real function):
    // logTheError(err.stack);
  }
}

makeError();