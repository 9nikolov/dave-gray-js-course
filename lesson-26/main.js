// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 1.1.1. Callbacks - functions that are passed as parameters to other functions

// 1.1.2. Example (defining a callback function):
/*
function function1(parameter, callback) {
  // I. - do stuff with normal parameters
  parameter++;
  // II. - call the callback function
  callback();
}
*/

// 1.2.1. "Callback Hell" - In Legacy Code you can encounter
// multiple functions which have callbacks and are nested within each other
// which leads to what appears as a pyramid of closing braces,
// making the code look like it's descending into a "hellish" structure.

// 1.2.2. In modern code "Callback Hell" is a rare sight,
// nowadays people use "Promises", which were created specifically to
// avoid "Callback Hell"

// 1.2.3. Example (callback hell):
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

// 2. Promises
// IMPORTANT: to fully understand the code example read ("promises-then-catch-explained.txt")
// Promises can have 3 states: Pending, Fulfilled, Rejected

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
