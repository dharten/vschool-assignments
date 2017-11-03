var chai = require('chai');
var assert = chai.assert;

var isIPv4 = require('./app.js');

describe("A function to determine if a given string is a valid IP address", function(){
  it("should have 4 decimal numbers and have a number between 0 and 255 at each decimal point", function(){
      assert.equal(isIPv4("172.240.39.1"), true);
  });
  it("should return true if each decimal set are between 0-255", function(){
      assert.isTrue(isIPv4("124.23.54.90"));
  });

 it("should return false if it is an invalid ip address", function(){
      assert.isFalse(isIPv4("300.45.1.3"))
  });

 it("should return false if there is a blank space", function() {
      assert.isFalse(isIPv4("30..4.1"))
  });
})
