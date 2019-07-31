//I learned how to use || to compare multiple aspects of an if function, and it will return true if any of those are met.
function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);
