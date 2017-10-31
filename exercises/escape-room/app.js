var ask = require("readline-sync");

var options = ["Put hand in hole", "Find the key", "Open the door"];
var keyHeld = false;

while (input !== 0) {
  var input = ask.keyInSelect(options, "What would you like to do?")
  if (input === 1) {
    keyHeld = true;
    console.log("You found it!");
  } else if (input === 2 && keyHeld === true) {
    console.log("You're free!");
    break;
  } else if (input === 2){
    console.log("You need the key!");
  } else {
    console.log("You're dead!");
  }
}
