//I learned you can use the radix number with parseInt to change the base numbering system to give different numbers based on different strings.
function convertToInteger(str) {
  var a = parseInt(str, 2);
  return a;
}

convertToInteger("10011");
