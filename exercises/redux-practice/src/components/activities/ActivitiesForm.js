import React, {Component} from "react";
import {connect} from "react-redux";
import {addActivity} from "../../redux/activities";

class ActivitiesForm extends Component {
  constructor() {
    super();
    this.state = {
      activity: ""
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addActivity(this.state);
    this.setState({ activity: "" })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <input
          value={ this.state.activity }
          name="activity"
          onChange={ this.handleInput }/>
        <button>Submit</button>
      </form>
    )
  }
}

export default connect(null, { addActivity })(ActivitiesForm);
