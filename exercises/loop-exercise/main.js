function string (str) {
  str1 = str.split("");
  for (i = 0; i < str.length; i++) {
  }
  console.log(str1);
}
// string("hello");

function stringCharacter (str, char) {
  // str1 = str.split("");
  // for (i = 0; i < str.length; i++) {
  //   if (char[i] ===
  // }
  console.log(str);
  console.log(str.indexOf(char));
  if (-1 === str.indexOf(char)) {
    console.log("Character not found");
  }
}
stringCharacter("Today is Wednesday", "z");
