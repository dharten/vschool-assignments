axios.get("https://api.vschool.io/dannyboy/todo/").then(function(response){
  for(var i = 0; i < response.data.length; i++) {
    document.getElementById("todoItem").innerHTML += "<div>" + response.data[i].title + "</div>";
  }
})

document.getElementById("newItem").addEventListener("click", function () {
  var newObj = {title: document.getElementById("newTodo").value}
  axios.post("https://api.vschool.io/dannyboy/todo/", newObj).then(function(response) {
    document.getElementById("todoItem").innerHTML += "<div>" + response.data.title + "</div>";
  })
})
