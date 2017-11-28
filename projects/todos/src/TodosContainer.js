import React from "react";
import axios from "../node_modules/axios";
import Form from "./Form";
// import TodoList from "./TodoList";

class TodosContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
    this.addTodo = this.addTodo.bind(this);
  }

  componentDidMount() {
    axios.get("https://api.vschool.io/dannyboy/todo/").then((response) => {
    console.log(response);
    })
  }

  addTodo(newTodo) {
    axios.post("https://api.vschool.io/dannyboy/todo/", newTodo).then((response) => {
      this.setState((prevState) => {
        const newTodo = response.data;
        const todos = [newTodo, ...[todos]];
        console.log({todos: todos});
      })
    })
  }


  render() {
    return(
      <div>
        <Form addTodo={ this.addTodo }/>
        {/* <TodoList todos={ this.state.todos }/> */}
      </div>
    )
  }
}

export default TodosContainer;
