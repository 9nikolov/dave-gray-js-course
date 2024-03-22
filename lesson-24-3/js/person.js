// JavaScript Modules

// 1. Exporting and importing classes
// in this file we will export a class
// to see how to import go to ("main.js")

// 2. exporting the class as a Default Export
// its more intuitive and a best practice to
// export a class as a Default Export
export default class person {
    // providing default values, in case none are passed
    constructor(name = 'Nikola', userName = '9nikolov'){
        // following the private properties convention
        // this tells devs to access properties using getters and setters
        // but they can still access them directly 
        // (nothing is really stopping them from doing so)
        this._name = 'Nikola';
        this._userName = '9nikolov';
    }
    greeting(){
        return `Hey, my name is ${this._name}`;
    }
}