import React, {Component} from "react";
import {connect} from "react-redux";
import {addUgly} from "../../redux/fullWindow/InputsReducer";

class UgliesForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      img: "",
      description: ""
    }
  this.handleInputs = this.handleInputs.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputs(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addUgly(this.state);
    this.setState({
      title: ""
    })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          name="title"
          value={ this.state.title }
          placeholder="Title"
          onChange={ this.handleInputs }
        />
        <input
          type="url"
          name="img"
          value={ this.state.img }
          placeholder="Image URL"
          onChange={ this.handleInputs }
        />
        <input
          type="text"
          name="description"
          value={ this.state.description }
          placeholder="Description"
          onChange={ this.handleInputs }
        />
        <button>Slap the Ugly!</button>
      </form>
    )
  }
}

export default connect(null, { addUgly })(UgliesForm);
