var chai = require("chai");
var assert = chai.assert;

var palindrome = require("./app.js")

describe("A function to check if an argument is the same forwards and backwards", function() {
  it('Should return true if the argument is a palindrome', function (){
    assert.equal(palindrome("star rats"), true);
  });
  it('Should return false if the argument is not a palindrome', function(){
    assert.equal(palindrome("palindrome"), false);
  });
  it("Should return true if the argument contains punctuation and is a palindrome", function() {
    assert.equal(palindrome("taco! cat!"), palindrome("tacocat"));
  });
  it("Should return true if the argument contains any non-alpha numeric characters and is a palindrome", function() {
    assert.equal(palindrome("t@ac0 ( cAt!"), true);
  });
})
