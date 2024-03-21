// JavaScript Errors and Error Handling
// 1. Creating a Custom Error 
// 2. Throwing a Custom Error

"use strict";

function customError(themessage) {
  // The "this" keyword is essential for accessing the properties of custom errors in JavaScript.
  //  Without it, you wouldn't be able to print crucial information like the error's message, name, and stack.
  //  For instance, using console.log(customError.name), console.log(customError.message), and console.log(customError.stack)
  //  requires this to make these properties accessible outside the error's block scope for printing.
  this.message = themessage;
  this.name = "customError"
  this.stack = `${this.name}: ${this.message}`
}

// Throwing our Custom Error
throw new customError("This is a custom error!");

