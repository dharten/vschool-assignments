var goombaCost = document.getElementById('goombaCost').innerHTML
goombaCost = parseInt(goombaCost);

var bobCost = document.getElementById('bobCost').innerHTML
bobCost = parseInt(bobCost);

var cheepCost = document.getElementById('cheepCost').innerHTML
cheepCost = parseInt(cheepCost);

// document.getElementById('compute').addEventListener('click', function() {
//   var goombaCount = parseInt(document.getElementById('goombaCount').value)
//   var bobCount = parseInt(document.getElementById('bobCount').value)
//   var cheepCount = parseInt(document.getElementById('cheepCount').value)
//
//   document.getElementById('goombaValue').innerHTML = goombaCount * goombaCost + " " + "Coins";
//   document.getElementById('bobValue').innerHTML = bobCount * bobCost + " " + "Coins";
//   document.getElementById('cheepValue').innerHTML = cheepCount * cheepCost + " " + "Coins";
//
//   document.getElementById('grandTotal').innerHTML = goombaCount * goombaCost + bobCount * bobCost + cheepCount * cheepCost + " " + "Coins";
// })

var computePest = function(count, cost, screenId) {
  var value = count * cost;
  console.log('value for ' + screenId + " " + value);
  document.getElementById(screenId).innerHTML = value + " " + "Coins";
  return value;
}

document.getElementById('compute').addEventListener('click', function() {
  var goombaValue = computePest(parseInt(document.getElementById('goombaCount').value), goombaCost, 'goombaValue');
  var bobValue = computePest(parseInt(document.getElementById('bobCount').value), bobCost, 'bobValue');
  var cheepValue = computePest(parseInt(document.getElementById('cheepCount').value), cheepCost, 'cheepValue');

  document.getElementById('grandTotal').innerHTML = goombaValue + bobValue + cheepValue + " " + "Coins";

})
