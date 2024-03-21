// JavaScript Errors and Error Handling
// 1. Adding "finally" to our try-catch block
// and why do we even use "finally"

"use strict";

try {
    // Attempting to access an undefined variable, which will throw a ReferenceError
    console.log(thisVariableDoesNotExistLOL); // This will throw an error
  } catch (error) {
    // Catching the error
    console.error("Error occurred:", error.message);
  } finally {
    // Code in the finally block always executes, 
    // regardless of whether an error occurred or not
    console.log("Finally block executed."); // This line will always execute
    // The purpose of the "finally" block is to 
    // ensure that certain cleanup or finalization tasks are performed,
    // regardless of whether an error occurred in the "try" block or not.
  }
