var ask = require("readline-sync");

function Location (shipThere, shipHit, location) {
  this.isShip = shipThere;
  this.hit = shipHit;
  this.display = location;
}

var matrix = [];
var rows = 10;
var columns = 10;


function battleGround (min, max) {
  for (var i = 0; i < rows; i++) {
    matrix.push([]);
    for (var j = 0; j < columns; j++) {
      var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomNumber > 1){
        var water = new Location (false, false, "W");
        matrix[i].push(water);
      }else{
        var ship = new Location (true, false, "S");
        matrix[i].push(ship);
      }
    }
  }
}

function displayBattle () {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      var cell = "~";
      if (matrix[i][j].display === "X") {
        cell = "X";
      }
      if (matrix[i][j].display === "M") {
        cell = "M";
      }
      process.stdout.write(cell + " ");
    }
    console.log();
  }
}

function playGame () {
  var row = ask.question("Please select a row (0-9)");
  var column = ask.question("Please select a column (0-9)");
  if (matrix[row][column].display === "S") {
    matrix[row][column].display = "X";
  }
  if (matrix[row][column].display === "W") {
    matrix[row][column].display = "M";
  }
  displayBattle();
}
battleGround(0, 9);
while (true) {
  playGame();
}
