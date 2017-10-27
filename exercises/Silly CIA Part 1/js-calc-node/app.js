var ask = require("readline-sync");

function add (num1, num2) {
  return num1 + num2;
}

function sub (num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

var value1 = Number(ask.question("What is your first number?"))
var value2 = Number(ask.question("What is your second number?"))

var operations = ["add", "subtract", "multiply", "divide"]

var operation = ask.keyInSelect(operations, "What operation would you like to perform?")

switch (operation) {
  case 0:
    console.log(add(value1, value2));
    break;
  case 1:
    console.log(sub(value1, value2));
    break;
  case 2:
    console.log(mul(value1, value2));
    break;
  case 3:
    console.log(div(value1, value2));
    break;
  default:
    console.log("cancelled");
  }
