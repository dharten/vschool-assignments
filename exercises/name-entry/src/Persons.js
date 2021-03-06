import React, {Component} from "react";
import Individual from "./Individual";

class Persons extends Component {
  constructor() {
    super();
      this.state = {
        names: ["dan", "tony", "tiger"],
        input: "",
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

//revamp
  handleSubmit(event) {
    this.state.names.push(this.state.input)
    this.setState({names: this.state.names})
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Input name:
            <input
              value={this.state.input}
              onChange= {this.handleChange}
            />
          </label>
          <button onClick={this.handleSubmit}>Submit</button>
          <h1>Name</h1>
        </form>
        <ol>
          {this.state.names.map((name, i) => {
            return (
                <Individual
                  key={ name + i }
                  name={ name }
                  delete={ this.handleDelete }
                />
              )
            })
          }
        </ol>
      </div>)
  }
}

export default Persons;
