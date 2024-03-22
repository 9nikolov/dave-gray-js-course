// Web Storage API

// 1. Using JSON with Web Storage API
// The Web Storage API data storage and retrieval works by 
// taking data and attempting to convert it to a string. 
// Another technology we've already learned that does something similar is JSON.
// Therefore, it would be highly beneficial if we use the 
// Web Storage API in combination with JSON.

// Example:
const userData = {
    name: 'John',
    age: 30,
    email: 'john@example.com'
};

// Stringify data for storage using JSON
localStorage.setItem('userData', JSON.stringify(userData));
// alternative approach
// const jsonString = JSON.stringify(userData);
// localStorage.setItem('userData', jsonString);

// Later, retrieve and parse the stored data using JSON
const retrieveData = JSON.parse(localStorage.getItem('userData'));
// alternative approach
// const retrieveData = localStorage.getItem('userData');
// const parseRetrievedData = JSON.parse(storedData);

console.log(parsedData); // Output: Object (without its functions)

// By utilizing JSON, we can easily stringify the data we want to store
// with the Web Storage API. This allows us to maintain the structure
// and integrity of our data.
// Later, when we need to retrieve this data, we can simply use 
// JSON.parse() to convert it back to its original format.

// It's worth noting that while this approach is highly beneficial,
// there is a limitation: JSON cannot serialize(save/store) functions.
// However, this limitation applies equally to the Web Storage API.
// Therefore, when using either of these technologies, we need to be mindful
// of this constraint and handle functions separately if needed (if we dont want to loose them).
