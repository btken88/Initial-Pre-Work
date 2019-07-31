//I learned you can use else if statements to have the code run through multiple possibilities for if statements before returning a result.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {return "Between 5 and 10";
}
}
// Change this value to test
testElseIf(7);
