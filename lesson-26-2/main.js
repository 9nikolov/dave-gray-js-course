// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 2. Promises
// Promises can have 3 states
// - Pending: Initial state, before the promise succeeds or fails.
// - Fulfilled: The operation completed successfully.
// - Rejected: The operation failed.

// 2.1. Promises Example 1 (refer to "lesson-26-1")

// 2.1. Promises Example 2:
// In this example, we'll explore how Promises are used in real-world web applications.
// Imagine you're building a website that needs to fetch data from multiple sources, like different servers through APIs.
// We'll simulate this scenario by creating two Promises:
// I. One Promise resolves immediately, representing data that's quickly available.
// II. The other Promise resolves after a delay,
// mimicking the unpredictable time it takes to retrieve data from a server.
// We'll execute the delayed Promise first to demonstrate how,
// even though it's started first, its results are returned second because
// it's delayed compared to the other promise.
// (That's what we call asynchronous programming.)
// This shows how we can work on one task without waiting for another to finish,
// like loading data from different servers at the same time.

// Creating a Promise that resolves immediately
const myPromise = new Promise((resolve, reject) => {
  const error = false; // No error
  if (!error) {
    resolve("myPromise Resolved!"); // Resolving the Promise with a success message
  } else {
    reject("myPromise Rejected!"); // Rejecting the Promise with an error message
  }
});

// Creating a delayed Promise that resolves after 3 seconds
const myOtherPromise = new Promise((resolve, reject) => {
  const error = false; // No error
  if (!error) {
    setTimeout(() => {
      resolve("myOtherPromise Resolved!"); // Resolving the Promise after 3 seconds
    }, 3000);
  } else {
    setTimeout(() => {
      reject("myOtherPromise Rejected!"); // Rejecting the Promise after 3 seconds
    }, 3000);
  }
});

// Executing the Promises
myOtherPromise.then((value) => {
  console.log(value); // Logging the resolved value of myOtherPromise
});

myPromise.then((value) => {
  console.log(value); // Logging the resolved value of myPromise
});
