//I learned how you can use multiple conditional operators instead of a chain of if/else statements to evaluate data.
function checkSign(num) {
  return (num < 0) ? "negative" : (num>0) ? "positive" : "zero";
}
checkSign(10);
