//I learned the spread operator (same script as the rest operator) and how you can use it to "unpack" an array into a function or another  array.
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);
