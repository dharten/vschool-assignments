// var numbers = [2, 4, 6];
// var newNumbers = numbers.map(function (num) {
//   console.log(num * 2);
// })
//
// console.log(numbers.map(String));

var nameOnly = ([{ name: "Angelina Jolie", age: 80},{name: "Eric Jones", age: 2},
{name: "Paris Hilton", age: 5}, {name: "Kayne West", age: 16}, {name: "Bob Ziroll", age: 100}])

var names = nameOnly.map(function(arr) {
  arr.age > 50 ? console.log(arr.name + " can go to the Matrix"): console.log(arr.name + " cannot go to the Matrix");
  return arr.name +  " " + arr.age;
})
// console.log(names);

var headers = nameOnly.map(function(arr) {
  return ('<h1>' + arr.name + '</h1>' + '<h2>' + arr.age + '</h2>')
})
console.log(headers);
