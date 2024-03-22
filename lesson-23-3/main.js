// Web Storage API

// 1. Session Storage
// 1.1. Google Chrome Web Dev Tools -> Application Tab -> Storage -> Session Storage

const myArray = ['eat','sleep','code'];
const myObject = {
    name: 'Nikola',
    logName: function() {
        console.log(this.name);
    }
}

// I. Session Storage Example + JSON
// save data to Session Storage
sessionStorage.setItem("mySessionStorage", JSON.stringify(myObject));
// retrieve data from Session Storage
const retrieveDataFromSessionStorage = JSON.parse(sessionStorage.getItem("mySessionStorage"));
// print retrieved data, to see if we succeeded retriving it
console.log(retrieveDataFromSessionStorage);


