import React from "react";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      price: ""
    }
    this.handleInputs = this.handleInputs.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state)
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label>Todo</label>
          <input name="title" value={ this.state.title }
          onChange={ this.handleInputs }/>
        <label>Description (optional)</label>
          <input name="description" value={ this.state.description }
          onChange={ this.handleInputs }/>
        <label>Price (optional)</label>
          <input name="price" value={ this.state.price }
          onChange={ this.handleInputs } type="number"/>
        <button>Submit</button>
      </form>
    )
  }
}

export default Form;
