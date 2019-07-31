//I learned that when creating else if statements, it's important to pay attention to the order in which you make them as the code will go from top to bottom, one after the other, until it has a true value.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);
