//I learned that the strict equality operator (===) will not convert between different types of data, and will only return true when the data matches exactly.
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);
