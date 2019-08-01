//I learned how you can use getters and setters to manipulate data for a specific user without showing what the implementation details are.
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(faren) {
      this.faren = faren;
    }
    get temp () {
      return 5/9 (this.faren-32);
    }
    set temp (cels) {
      this.faren = cels * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
