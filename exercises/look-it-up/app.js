var dictionary = {};

var addWord = function (word, definition) {
    dictionary[word] = definition;
}

var search = function(word) {
  return dictionary[word];
}

module.exports = {
  addWord,
  search
}
