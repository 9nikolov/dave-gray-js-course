// Web Storage API
// 1. Clear/Delete all data from Local Storage or Session Storage
// imagine you have 100 items in your local/session storage
// and you want to delete them all

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

// 1. CLEAR/DELETE ALL DATA FROM LOCAL STORAGE
localStorage.clear();