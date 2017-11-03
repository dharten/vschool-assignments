var chai = require("chai");
var assert = chai.assert;
var addWord = require("./app.js").addWord;
var search = require("./app.js").search;

describe("A dictionary to add and lookup words",
  function() {
    it("Should store the word when added",
    function() {
      addWord("happy", "feeling good");
      assert.equal(search("happy"), "feeling good")
    });
    it("Should return undefined when we lookup a word not present",
    function() {
      assert.isUndefined(search("sad"));
    });
  }
);
