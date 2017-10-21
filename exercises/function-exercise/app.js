// function sum(num1, num2) {
//   return (num1 + num2);
// }
// console.log(sum(27, 27));

// function largest(num1, num2, num3) {
//   if (num1 > num2 && num1 > num3){
//     return num1;
//   } else if (num2 > num1 && num2 > num3){
//     return num2;
//   } else if (num3 > num1 && num3 > num2){
//     return num3;
//   } else {
//     return false;
//   }
// }
// console.log(largest(120, 54, 76));

// function oddEven(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "odd";
//   }
// }
// console.log(oddEven(33));

var string1 = "This will work or perhaps it wont";

function combineString(s) {
    if (s.length < 20){
      console.log(s + " " + s);
    }
}
combineString(string1);
