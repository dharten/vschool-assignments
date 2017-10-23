var str1 = "Today is Monday and the start of a good week.";
var str2 = "I will be learning a bunch this week";


function addIndexMatch() {
  var add = str1.concat(" " + str2);
  var index = str2.lastIndexOf("bunch");
  console.log(add);
  console.log(add.indexOf("a"));
  console.log(index);
  console.log(str1.match("and"));
}
// addIndexMatch();

function replaceSliceSplit() {
  var replace = str1.replace("Today is Monday and the start", "Tomorrow is Tuesday and the middle");
  console.log(replace);
  console.log(replace.slice(12, 19));
  console.log(replace.split("a"));
}
// replaceSliceSplit();

function lowerUpperSubstr() {
  var upper = str1.toUpperCase();
  var lower = str1.toLowerCase();
  console.log(upper);
  console.log(lower);
  console.log(upper.substr(20));
}
lowerUpperSubstr();
