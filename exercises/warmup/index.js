function removeVowels(str) {
  arr = str.split("");
  return arr.reduce((prev, currentChar) => {
    let c = currentChar.toLowerCase();
    if (c === "a" || c === "e" || c === "i" || c === "o" || c === "u") {
      prev.vowels += currentChar
    } else {
      prev.str += currentChar
    }
    prev.str += currentChar
    return prev
  }, {str: "", vowels: ""})
}

removeVowels("Pickle Rick!")

function vowels(string) {

    return {
        cons: string.toLowerCase().match(/[^aeiou\s]+/g).join(""),
        vowels: string.toLowerCase().match(/[aeiou]+/g).join("")
    }
}

console.log(vowels("Pickle Rick!"))
