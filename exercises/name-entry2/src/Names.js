import React, {Component} from "react";
import Name from "./Name";

class Names extends Component {
  constructor() {
    super();
    this.state = {
      names: [],
      input: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    event.persist();
    this.setState(prevState => {
      return {input: event.target.value};
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState(prevState => {
      const names = [...prevState.names];
      names.push(prevState.input);
      return{ names, input:"" };
    })
  }

  handleDelete(index) {
    this.setState(prevState => {
      const names = prevState.names;
      names.splice(index, 1);
      return { names };
    })
  }

  render() {
  return(
    <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person to record:
          <br></br>
            <input
              value={ this.state.input }
              onChange={ this.handleInput }
            />
          </label>
            <button onClick={ this.handleSubmit }>Submit</button>
            <h1>Name</h1>
        </form>
      <ol>
        {this.state.names.map((name, i) => {
          return <Name
            key={ name + i }
            name={ name }
            delete={ () => this.handleDelete(i) }
          />
        })}
      </ol>
    </div>
    )
  }
}

export default Names;
