import React, {Component} from "react";

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      fname: "",
      lname: "",
      age: "",
      gender: "",
      destination: "",
      dietaryRestrictions: [
        {
          label: "Vegetarian",
          checked: false
        },
        {
          label: "Lactose Intollerant",
          checked: false
        },
        {
          label: "Kosher",
          checked: false
        },
        {
          label: "Mamaz cooking",
          checked: false
        }

      ]
    }
    this.handleUserData = this.handleUserData.bind(this);
    this.handleToggleRestriction = this.handleToggleRestriction.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserData(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleToggleRestriction(restriction) {
    restriction.checked = !restriction.checked
  }

  handleSubmit (event) {
    event.preventDefault();
    alert(`First Name: ${ this.state.fname }
Last Name: ${ this.state.lname }
Age: ${ this.state.age }
Gender: ${ this.state.gender }
Destination: ${ this.state.destination }
Dietary Restrictions:${ this.state.dietaryRestrictions.map(restriction => {
        if (restriction.checked) {
          return " " + restriction.label
        } else {
          return null
        }
      })
    }`)
    this.setState({ [event.target.name]: " " })
  }

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <div>
          <label>
            First Name:
            <input name="fname" value={ this.state.fname }
              onChange={ this.handleUserData }
            />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Last Name:
            <input name="lname" value={ this.state.lname }
              onChange={ this.handleUserData }
            />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Age:
            <input name="age" value={ this.state.age }
              onChange={ this.handleUserData } type="number" />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Gender:
              Male
              <input name="gender" value="male" type="radio"
                onChange={ this.handleUserData }
              />
              Female
              <input name="gender" value="female" type="radio"
                onChange={ this.handleUserData }
              />
              Neither
              <input name="gender" value="neither" type="radio"
                onChange={ this.handleUserData }
              />
          </label>
        </div>
        <br></br>
        <div>
          <label>
            Destination:
            <select name="destination" onChange={ this.handleUserData }>
              <option>{/*leave blank*/}</option>
              <option value="Denver, CO">Denver, CO</option>
              <option value="Jacksonville, FL">Jacksonville, FL</option>
              <option value="Perth, AUS">Perth, AUS</option>
            </select>
          </label>
        </div>
        <br></br>
        <label>Dietary Restrictions</label>
        {this.state.dietaryRestrictions.map((restriction, i) => {
          return <div>
            <input key={ restriction + i } name={ restriction.label }
              value={ restriction.label } type="checkbox"
              onChange={ () => this.handleToggleRestriction(restriction) }
            />{ restriction.label }
          </div>
        })}
        <br></br>
        <button onClick={ this.handleSubmit }>Submit</button>
      </form>
    )
  }
}

export default UserInfo;
