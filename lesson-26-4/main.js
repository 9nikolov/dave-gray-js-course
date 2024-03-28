// Fetch API requires a discussion of...
// Callbacks, Promises, Thenables, Async/Await

// 3. Async / Await

// 3.1. Defining Async Functions + working with Await

// defining async function
async function myAsyncFunction() {}

// defining async arrow function
const myAsyncArrowFunction = async () => {
  // this line fetches data from the specified URL asynchronously and tells the code below to wait until it's finished
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // this line extracts JSON data from the response asynchronously and tells the code below to wait until it's finished
  const jsonUserData = await response.json();
  // this line logs the fetched JSON data to the console
  console.log(jsonUserData);
  // this line returns the fetched JSON data
  return jsonUserData;
};

// here we are calling the myAsyncArrowFunction()
myAsyncArrowFunction();
