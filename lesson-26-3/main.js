// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 2. Promises

// 2.3. Promises Example 3: Fetching Data

// Creating a promise to fetch user data from an API
const usersPromise = fetch("https://jsonplaceholder.typicode.com/users");

// Handling the promise using then() and catch() methods
usersPromise
  .then((response) => {
    // Checking if the response is successful
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Parsing the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Iterating through the fetched user data and logging each user
    data.forEach((user) => {
      console.log(user);
    });
  })
  .catch((error) => {
    // Handling errors that occur during the fetch operation
    console.error("There was a problem with the fetch operation:", error);
  });

// 2.4. Promises Example 4: Common Promise Mistake
// Mistake: Attempting to access promise result immediately
// Explanation:
// It's common to mistakenly try to access the result of a promise immediately
// after its creation, leading to the display of the promise's pending state
// followed by the actual data.

// Note: In real-world scenarios, avoid trying to access promise results immediately.

// Fetching user data and logging it
const usersPromise2 = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    // Parsing the response body as JSON
    return response.json();
  })
  .then((data) => {
    // Logging the fetched data
    data.forEach((user) => {
      console.log(user);
    });
  });

// Attempting to access promise result immediately
// This line of code will not wait for usersPromise2's
// .then() and .catch() methods to finish executing.
// Promises in JavaScript execute asynchronously, meaning they continue to
// the next lines of code without waiting for the promise to resolve.
// As a result, logging usersPromise2 directly here may display the promise's
// pending state or incomplete data, as the promise resolution happens in the background.
// To ensure accurate data, it's essential to handle promises' results inside their
// respective .then() and .catch() blocks.
console.log(usersPromise2);
