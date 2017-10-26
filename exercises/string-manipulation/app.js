var ask = require("readline-sync")

var firstName = ask.question("What is your first name?");
console.log("Hi " + firstName + ".");

var lastName = ask.question("What is your last name? ");
console.log(firstName.toUpperCase() + " " + lastName.toUpperCase() + "... " + "That's a wonderful name!!!");

var questionOne = ask.question("Will you tell me something about yourself? ");
console.log("That's neat.");

var questionTwo = ask.question("Will you tell me something else? ");
console.log("That's neat too!!");

console.log(firstName + ", " +  "so far you've told me, '" + questionOne.concat(" and " + questionTwo) + "'.");
var answer = ask.keyInYN("Is this correct?")
if (answer) {
  console.log("Awesome");
} else {
  console.log("My bad");
}

var questionThree = ask.question("Will you give me a long statement that I can manipulate? ");
if (questionThree.length > 20) {
  console.log("I'm sorry, but I was only able to remember the last half of your statement because it was so long." + "'" + questionThree.slice( - (questionThree.length / 2 + "'")));
  console.log()
}
