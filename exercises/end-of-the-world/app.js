var counter = 3;
var endOfTheWorld = setInterval(function(){
  console.log(counter);
  document.getElementById("timer").innerHTML = counter--
  if (counter === -1) {
    document.getElementById("timer").innerHTML = "Dead!"
    clearInterval(endOfTheWorld);
  }
}, 1000);
