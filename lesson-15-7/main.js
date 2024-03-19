// Two-dimensional Arrays (Nested Arrays)

// READ ME:
// 1. IMPORTANT: look at "lesson-15-7/shelves.avif" before reading this code lesson
// 2. IMPORTANT: department - word defintion
// a distinct part of anything arranged in divisions; 
// a division of a complex whole or organized system. 
// one of the principal branches of a governmental organization: 
// the sanitation department.

const equipmentShelfA = ['baseball','football','volleyball'];
const equipmentShelfB = ['basketball', 'golf balls', 'tennis balls'];

const clothesShelfA = ['tank tops','t-shirts','jerseys'];
const clothesShelfB = ['sweat tops','sweat pants','hoodies'];

console.log(equipmentShelfA[0]);
console.log(equipmentShelfB[2]);
console.log('\n');

const equipmentDepartment = [equipmentShelfA, equipmentShelfB];
const clothesDepartment = [clothesShelfA, clothesShelfB];

// theorethically explained - go to "equipmentShelfA" and get the "football"
// in practice - this will go into the first array, which is "equipmentShelfA" and look for element with index of 1, which is "football"
console.log(equipmentDepartment[0][1]);
// theorethically explained - go to "clothesShelfB" and get the "hoodies"
console.log(clothesDepartment[1][2]);