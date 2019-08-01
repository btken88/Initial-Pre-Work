//I learned how to set a default value or parameter in a function so that the funciton will run if a value isn't defined by the user
const increment = (function() {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
