//I learned  that by declaring a local variable with the same name as a global variable, you can override the global one with the local var inside the function.
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";


  // Only change code above this line
  return outerWear;
}

myOutfit();
