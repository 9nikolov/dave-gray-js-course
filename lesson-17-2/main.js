// Objects Instances and Objects Inheritance

// defining object vehicle
const vehicle = {
  type: 'suv',
  engine: function(){
    return "Vrooooom!";
  }
};

// creating an instance of the vehicle object
const rav4 = Object.create(vehicle); 
console.log(rav4);

// creating an instance of the vehicle object and overwriting the inherited values
// these changes affect only the "teslaModel3" instance
const teslaModel3 = Object.create(vehicle); 
teslaModel3.type = 'sedan';
// overwriting the function
teslaModel3.engine = function() {
  return 'silent electric noise';
};
console.log(teslaModel3);

// creating an instance of the vehicle object and adding new properties
// these changes affect only the "crv" instance
const crv = Object.create(vehicle);
crv.engineFuelType = "petrol";
crv.color = "pearly white";
crv.wheelSize = 17;
console.log(crv);
