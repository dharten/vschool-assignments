var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
// var food = [ 'apple','orange','watermelon',1,'carrot','tomato','pepper',3]

var newVeg = vegetables.pop();
// console.log(vegetables);

var newFruit = fruit.shift();
// console.log(fruit);

var index = fruit.indexOf("orange");
// console.log(index);

var addFruit = fruit.push(1);
// console.log(addFruit);

var length = vegetables.length;
// console.log(length);

var addVeg = vegetables.push(3);
// console.log(addVeg);

var food = fruit.concat(vegetables);
// console.log(food);

var newArray = food.splice(4,2);
// console.log(newArray);

var reverse = food.reverse();
// console.log(reverse);

var string = food.join(", ");
console.log(string);
