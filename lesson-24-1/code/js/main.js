// START BY READING lesson-24-1.txt

// Javascript Modules
// makes code modular and able to be included in other apps
// require a Live Serve in order to be able to run

// 1. Default Export vs Named Export/Exports

// 1.1. syntax when importing default export
import playGuitar from './guitars.js';
// 1.2. syntax when importing named export/exports
import {shredding, plucking} from './guitars.js';

// 3. renaming named export
// Imagine a scenario where two members of your team create different modeles
// but these modules happen to have functions that have identical names
// In order to prevent code conflicts we can rename one of them during the
// import, without changing its actual file name.
import {shredding as shredPaper} from './paper-shredder.js';
// 4. renaming default export
// NOT POSSIBLE
// JavaScript expects each module to have a unique "Default Export".
// if this is not the case you will need to refactor the modules themselves

console.log(playGuitar());
console.log(shredding());
console.log(plucking());
console.log(shredPaper());