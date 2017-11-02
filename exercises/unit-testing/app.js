var palindrome = function (str) {
  var lowerCaseNoSpace = str.toLowerCase().replace(/\W/g, '');
  var arrReverseRejoin = lowerCaseNoSpace.split('').reverse().join('');
  return arrReverseRejoin === lowerCaseNoSpace;
}

module.exports = palindrome;
