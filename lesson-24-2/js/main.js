// Javascript Modules
// 1. importing the module as a full namespace
// 2.1. downside of importing a module as a full namespace
// 2.2. another approach to get around the downside
// that would be to not use Default Export functions
// in your modules and use only Named Export/Exports

// 1. importing the module as a full namespace
import * as Guitars from './guitars.js';

// 2.1. downside of importing a module as a full namespace
// the Default Export can not be
// referenced by it's name anymore, we have to use
// "default();" instead
// not possible: console.log(Guitar.playGuitar());
// do this instead:
console.log(Guitars.default());

console.log(Guitars.shredding());
console.log(Guitars.plucking());
