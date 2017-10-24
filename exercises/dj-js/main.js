var square = document.getElementById('change')

function blue(){
  this.style.backgroundColor = 'blue';
}

function red(){
  this.style.backgroundColor = 'red';
}

function yellow(){
  this.style.backgroundColor = 'yellow';
}

function green(){
  this.style.backgroundColor = 'green';
}

square.addEventListener('mouseover', blue);
square.addEventListener('mousedown', red);
square.addEventListener('mouseup', yellow);
square.addEventListener('dblclick', green);

document.addEventListener('mousewheel', function() {
  square.style.backgroundColor = 'orange';
})
