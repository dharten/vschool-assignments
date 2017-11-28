import React from "react";

class TodoList extends React.Component {
  render(props) {
    return(
      <div>
        { props.todos.map((todo, i) => {
          return(
            <h2>{ todo.title }</h2>
          )
        }) }
      </div>
    )
  }
}

export default TodoList;
