//I learned you can use the let keyword instead of var to make it so a variable can't be redefined later in the code.
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
