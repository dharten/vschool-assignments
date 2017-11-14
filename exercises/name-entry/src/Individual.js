import React, {Component} from "react";

class Individual extends Component {
  render(props) {
    return (
      <div>
        <ol>
          <li>{ this.props.name }</li>
        </ol>
      </div>
    )
  }
}

export default Individual;
