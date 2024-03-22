// Web Storage API
// 1. Get a specific item from Local/Session Storage
// 2. Get total number of items in Local/Session Storage

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

// 1. retrieve a specific item from the Local Storage
const key = localStorage.key(0);
// 2. get the total number of items in Local Storage
const totalItems = localStorage.length(0);

// 1. print retrieved item [0] from Local Storage 
console.log(key);
