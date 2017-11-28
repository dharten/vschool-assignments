import React from "react";
import axios from "../node_modules.axios";

class Todo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      price: ""
    }
  }

  render() {
    return(
      <h1>{ this.state }</h1>
    )
  }
}

export default Todo;
