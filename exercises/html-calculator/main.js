document.getElementById('addButton').addEventListener('click', function(){
  var boxOne = parseInt(document.getElementById('addInputOne').value)
  var boxTwo = parseInt(document.getElementById('addInputTwo').value)

  document.getElementById('addTotal').innerText = boxOne + boxTwo;
})

document.getElementById('subtractButton').addEventListener('click', function(){
  var boxOne = parseInt(document.getElementById('subtractInputOne').value)
  var boxTwo = parseInt(document.getElementById('subtractInputTwo').value)

  document.getElementById('subtractTotal').innerText = boxOne - boxTwo;
})

document.getElementById('multiplyButton').addEventListener('click', function(){
  var boxOne = parseInt(document.getElementById('multiplyInputOne').value)
  var boxTwo = parseInt(document.getElementById('multiplyInputTwo').value)

  document.getElementById('multiplyTotal').innerText = boxOne * boxTwo;
})

document.getElementById('divideButton').addEventListener('click', function(){
  var boxOne = parseInt(document.getElementById('divideInputOne').value)
  var boxTwo = parseInt(document.getElementById('divideInputTwo').value)

  document.getElementById('divideTotal').innerText = boxOne / boxTwo;
})
