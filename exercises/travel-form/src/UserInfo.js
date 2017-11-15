import React, {Component} from "react";
import Display from "./Display";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      users: []
    }
    this.handleName = this.handleName.bind(this);
    // this.handleLastName = this.handleLastName.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleName (event) {
    console.log({ [event.target.name]: event.target.value })
    this.setState({ [event.target.name]: event.target.value })
  }

  // handleLastName (event) {
  //   this.setState({ lname: event.target.value })
  // }

  handleSubmit (event) {
    event.preventDefault();
    this.setState({ users: [...this.state.users, this.state.fname, this.state.lname] })
    // this.setState(prevState => {
    //   const users = [...prevState.users];
    //   users.push.apply(users, [prevState.fname, prevState.lname]);
      // return { users, [fname:"", lname:""}
    // })
  }

  render() {
    const user = this.state.users.map((user, i) => {
      return <Display key={ user + i }
                      name={ user }
      />
    })
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>
            First Name:
              <input  type="text"
                      name="fname"
                      value={ this.state.fname }
                      onChange={ this.handleName }
              />
            Last Name:
              <input  type="text"
                      name="lname"
                      value={ this.state.lname }
                      onChange={ this.handleName }
              />
          </label>
          <button>Submit</button>
        </form>
        <ol>
          {user}
        </ol>
      </div>
    )
  }
}

export default UserInfo;
