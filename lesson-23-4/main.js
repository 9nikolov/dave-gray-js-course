// Web Storage API

// 1. Local Storage
// 1.1. Google Chrome Web Dev Tools -> Application Tab -> Storage -> Local Storage
// How to see Local Storage in action:
// I.   Close the website window.
// II.  Stop the Live Server.
// III. Comment out your entire JS file and save changes.
// IV.  Restart the app using Live Server.
// V.   Navigate to the Browser's Application tab -> Local Storage
// there you'll find that your data is still intact, saved and did not dissapear.

const myArray = ['eat','sleep','code'];
const myObject = {
    name: 'Nikola',
    hobbies: ['eat','sleep','code'],
    logName: function() {
        console.log(this.name);
    }
}

// II. Local Storage Example + JSON
// save data to Local Storage
localStorage.setItem("mySessionStorage", JSON.stringify(myObject));
// retrieve data from Local Storage
const retrieveDataFromLocalStorage = JSON.parse(localStorage.getItem("mySessionStorage"));
// print retrieved data, to see if we succeeded retriving it
console.log(retrieveDataFromLocalStorage);