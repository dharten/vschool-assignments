const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos");

const Schema = mongoose.Schema;

const todoSchema = new Schema(
  {
    title: String,
    date: String,
    completed: Boolean
  }
)

const Todo = mongoose.model("Todo", todoSchema);

const newTodo = new Todo(
  {
    title: "Workout",
    date: "12/13/2017",
    completed: false
  }
)

// newTodo.save((err, todo) => {
//   console.log("added todo", todo);
// })


// Todo.findOne({ title: "Workout" }, (err, todo) => {
//   todo.completed = true;
//   todo.save((err, todo) => {
//     console.log("updated", todo);
//   })
// })

// Todo.findOne({ title: "Workout", date: "12/13/2017" }, (err, todo) => {
//   todo.completed = false;
//   todo.save((err, todo) => {
//     console.log("updated", todo);
//   })
// })

// Todo.remove({ title: "Workout"}, (err, todo) => {
//   console.log("removed", todo);
// })

Todo.find((err, todo) => {
  console.log("all todos", todo);
})
