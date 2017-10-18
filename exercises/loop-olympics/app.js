// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }
// for (var i = 9; i >= 0; i--) {
//   console.log(i);
// }
// var fruit = ["banana", "orange", "apple", "kiwi"]
// for (var i = 0; i < fruit.length; i++) {
//   console.log(fruit[i]);
// }
// var array = [];
// for (var i = 0; i < 10; i++) {
//   array.push(i);
//   console.log(array[i]);
// }
// for (var i = 0; i <= 100; i += 2) {
//   console.log(i);
// }
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (var i = 1; i < fruit.length; i += 2) {
//   console.log(fruit[i]);
// }
// var names = ['john', 'mike', "sue", "mark", "ash"]
// for (var i = 0; i < names.length; i++) {
//   console.log(names);
//   break;
// }
// var names = ['john', 'mike', "sue", "mark", "ash"]
// for (var i = 0; i < names.length; i++) {
//   console.log(names);
//   names.push("jordan", "heather", "sheryl");
//   console.log(names);
//   break;
// }
// var names = ['john', 'mike', "sue", "mark", "ash"]
// for (var i = 0; i < names.length; i++) {
//   names.push("jordan", "heather", "sheryl");
//   console.log(names);
//   break;
// }
var names = []
var occupations = []
var peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor"
  },
  {
    name: "Justin Beiber",
    occupation: "Singer"
  },
  {
    name: "Vladmir Putin",
    occupation: "Politition"
  },
  {
    name: "Oprah",
    occupation: "Entertainer"
  }
]
for (var i = 0; i < peopleArray.length; i++) {
  if (i % 2 === 0){
    names.push(peopleArray[i].name);
    continue;
  }
  if (i % 2 !== 0){
    occupations.push(peopleArray[i].occupation)
  }
}
console.log(names);
console.log(occupations);
