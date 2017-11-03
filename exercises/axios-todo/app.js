function loadTodos () {
  axios.get("https://api.vschool.io/dannyboy/todo/")
  .then(function(response){
    for(var i = 0; i < response.data.length; i++) {
      createTodoElement(response.data[i], i);
    }
  })
}

document.getElementById("submit").addEventListener("click", function () {
  var newTodo = {
    title: document.getElementById("newTodo").value,
    price: document.getElementById("newCost").value,
    description: document.getElementById("newDescription").value
  };
  axios.post("https://api.vschool.io/dannyboy/todo/", newTodo)
  .then(function(response) {
    loadTodos();
  })
})

function createTodoElement (todo, id) {
  var todoItemsElement = document.getElementById("todoItems")
  todoItemsElement.innerHTML += "<div id=todo_" + id + ">"
  + "<input type='checkbox' id='" + id + "' class='check' onclick='lineoutTodo(this.id)'>"
  + "<div>" + todo.title + "</div>"
  + "<div>" + todo.price + "</div>"
  + "<div>" + todo.description + "</div>"
  + "</div>"
  + "<br></br>";
}

// console.dir(document.getElementsByClassName("check"))
// var checkBoxes = document.getElementsByClassName('check')
// for (var i = 0; i < checkBoxes.length; i++) {
//   if(checkBoxes[i].checked === true) {
//     document.getElementById(todo_i).style.text-decoration = line-through;
//   }
// }

function lineoutTodo () {
  var checkBoxes = document.getElementsByClassName('check')
  for (var i = 0; i < checkBoxes.length; i++) {
    if(checkBoxes[i].checked === true) {
      document.getElementById('todo_' + i).style.textDecoration = "line-through";
    }
  }

  // console.dir(checkboxId) // i
  // console.log(todoId);
  // console.log(checkboxId[0])
  // var todoId = 'todo_' + checkboxId // 'todo_i'
  // console.log(todoId) //getElementById(todoId) <div id="todo_0">...</div>
  // document.getElementById(createTodoElement(id)).addEventListener('click', function() {
  //   var strikethrough = document.getElementById('todoId');
  //   strikethrough.style.setProperty("text-decoration", "line-through");
  // })
    // todoId = checkboxId;
    // console.log(todoId);
}

loadTodos();
