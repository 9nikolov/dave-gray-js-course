// 3.3. Common Mistake: Premature Data Access with Async Functions

// Defining a global array to store fetched user data
let users = [];

// Defining an async arrow function to fetch user data
const fetchUserData = async () => {
  // this line fetches data from the specified URL asynchronously and tells the code below to wait until it's finished
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  // this line extracts JSON data from the response asynchronously and tells the code below to wait until it's finished
  const jsonData = await response.json();
  // Filling the 'users' array with the fetched and formatted data
  users = jsonData;
};

// Calling the async function to fetch user data
fetchUserData();

// Trying to access the 'users' array immediately after calling fetchUserData()
// This results in 'users' being empty or undefined at logging time
// because fetchUserData() is async, meaning other code doesn't wait for its completion
// So, when console.log(users) runs, it happens before 'users' is actually filled,
// leading to an undefined or empty array
console.log(users);
// The solution in this case would be very simple, we can just move
// this line of code inside the fetchUserData() function, at the very bottom
