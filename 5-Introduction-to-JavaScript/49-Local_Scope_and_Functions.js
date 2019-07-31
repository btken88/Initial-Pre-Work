//I learned when a variable is declared  inside a function, it will only have local scope, and won't be available outside that specific function.
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = 17;
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
