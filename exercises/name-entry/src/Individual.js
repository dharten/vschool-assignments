import React, {Component} from "react";

class Individual extends Component {
  render(props) {
    return (
      <div>
          <li>{ this.props.name }</li>
          <button>Delete</button>
      </div>
    )
  }
}

export default Individual;
