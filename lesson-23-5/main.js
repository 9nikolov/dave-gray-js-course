// Web Storage API
// 1. Remove Item from Web Storage
// 2. Retrieving non-existent data from Web Storage
// will return null as a result and 
// you need to be prepared for that case

const myArray = ['eat','sleep','code'];
const myObject = {
    name: 'Nikola',
    hobbies: ['eat','sleep','code'],
    logName: function() {
        console.log(this.name);
    }
}

// 0. save data to Local Storage
localStorage.setItem("myLocalStorage", JSON.stringify(myObject));

// 1. REMOVE DATA FROM LOCAL STORAGE
localStorage.removeItem("myLocalStorage");
// 2. ATTEMPT TO RETRIEVE THE DATA WE REMOVED FROM LOCAL STORAGE (NON-EXISTING DATA)
const retrieveDataFromLocalStorage = JSON.parse(localStorage.getItem("myLocalStorage"));
// 2. PRINTING THE RESULT OF THE DATA RETRIEVAL (this will be null) 
console.log(retrieveDataFromLocalStorage);