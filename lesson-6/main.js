// Return a random letter from your name
const myName = 'Nikola';
const myNameCharactersQuantity = myName.length;

console.log('myName = \'' + myName + '\'');
console.log('myName char length = ' + myNameCharactersQuantity);

function getRandomInt(myNameCharactersQuantity) {
    return Math.floor(Math.random() * myNameCharactersQuantity);
}

// return a single 'myName' character from a random position 
console.log(myName.charAt(getRandomInt(myNameCharactersQuantity)));