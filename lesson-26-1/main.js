// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 0. Summary of the Evolution of Asynchronous Operations in JavaScript:
// First Callback Functions were used
// Then Promises were created to replace Callback Functions
// Then Promises were then improved with .then() and .catch() methods
// Then Async/Await were created to replace Promises + .then() and .catch()

// 1.1.1. Callbacks - functions that are passed as parameters to other functions

// 1.1.2. Example of "Callback Function":
/*
function function1(parameter, callback) {
  // I. - do stuff with normal parameters
  parameter++;
  // II. - call the callback function
  callback();
}
*/

// 1.2.1. "Callback Hell"
// In Legacy Code you can encounter multiple functions which have
// callbacks and are nested within each other
// which leads to what appears as a pyramid of closing braces,
// making the code look like it's descending into a "hellish" structure.

// 1.2.2. In modern code "Callback Hell" is a rare sight,
// nowadays people use "Promises", which were created specifically to
// avoid "Callback Hell"

// 1.3. Example of "Callback Hell":
// calling functionA,
// then calling functionB inside of functionA's anonymous function,
// then calling functionC inside of functionB's anonymous function
/*
functionA(param, function () {
  functionB(param, function () {
    functionC(param, function () {});
  });
});
*/

// 2. Promises can have 3 States (Pending, Fullfilled, Rejected)
// - Pending: Initial state, before the promise succeeds or fails.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.

// 2.1. Promises Example 1: Creating a Promise & Handling it using .then() and .catch()
// I. Creating a Promise that always get Fulfilled successfully
// II. Handling the Fulfilled Promise using .then() and .catch() methods
// IMPORTANT: For a detailed explanation, refer to "promises-then-catch-explained.txt"

const myPromise = new Promise((resolve, reject) => {
  const error = false;
  if (error === false) {
    resolve("Yes! Resolved Promise!");
  } else {
    reject("No! Rejected Promise!");
  }
});

console.log(myPromise);

myPromise
  .then((value) => {
    return value + 1;
  })
  .then((value2) => {
    console.log(value2);
  })
  .catch((err) => {
    console.log(err);
  });
