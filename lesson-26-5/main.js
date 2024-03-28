// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 3. Async / Await

// 3.2. Chained Async Functions

const myAsyncArrowFunction = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const jsonUserData = await response.json();
  console.log(jsonUserData);
  return jsonUserData;
};

// defining another async arrow function
const anotherAsyncArrowFunction = async () => {
  // Calling myAsyncArrowFunction() and waiting until it's finished
  await myAsyncArrowFunction();
  // Logging "hello" to the console
  console.log("hello");
};

anotherAsyncArrowFunction();
