function string (str) {
  for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }
}
// string("hello");

function findChar (str, char){
  for (var i = 0; i < str.length; i++) {
    if (char === str.charAt(i)) {
      console.log(i);
      return;
    }
  }
  console.log("Character not found in string");
}
// findChar("Today is Wednesday", 'd');

var arr = [1, 3, 5, 12, 33, 56, 77];

function find42 (numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] === 42) {
      console.log(i);
      return;
    }
  }
  console.log("42 not found");
}
// find42(arr);

var arr = [6234457, 2576687563, 444566, 542355644, 7234566, 83423466, 97568, 8436567, 532344, 68437];

function findMin (numbers) {
  var least = Number.MAX_SAFE_INTEGER;
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] < least) {
      least = numbers[i];
    }
  }
  console.log("minimum", least);
}
findMin(arr);
