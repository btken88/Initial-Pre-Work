//I learned that if you put return into a function, it will immediately stop running at that point ant return whats happened until then, but will not go through the rest of the code.
// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a <0 || b <0) {
    return undefined;
  } else


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
