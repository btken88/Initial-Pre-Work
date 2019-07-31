//I learned you can use .hasOwnProperty(x) to check if an object has property x. You can then also return what that property is using bracket notation
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]}
    else {return "Not Found"};
}

// Test your code by modifying these values
checkObj("gift");
