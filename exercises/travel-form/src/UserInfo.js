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
          id: 1,
          label: "Vegetarian",
          checked: false
        },
        {
          id: 2,
          label: "Lactose Intollerant",
          checked: false
        },
        {
          id: 3,
          label: "Kosher",
          checked: false
        },
        {
          id: 3,
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
  }

  this.state.dietaryRestrictions.map(restriction => {
          if (restriction.checked) {
            return " " + restriction.label
          } else {
            return null
          }
        })
      }


  render() {
    return(
        <form onSubmit={ this.handleSubmit }>
            <div>
              <label>
                First Name:
                <input name="fname"
                  value={ this.state.fname }
                  onChange={ this.handleUserData }
                />
                Last Name:
                  <input name="lname"
                    value={ this.state.lname }
                    onChange={ this.handleUserData }
                  />
              </label>
            </div>
          <div>
            <label>
              Age:
                <input name="age"
                  value={ this.state.age }
                  onChange={ this.handleUserData }
                  type="number"
                />
            </label>
          </div>
          <div>
            <label>
              Gender:
                Male
                <input name="gender" value="male" type="radio" onChange={ this.handleUserData } />
                Female
                <input name="gender"     value="female"     type="radio"     onChange={ this.handleUserData }   />
                Neither
                <input name="gender"
                  value="neither"
                  type="radio"
                  onChange={ this.handleUserData }
                />
            </label>
          </div>
          <div>
            <label>
              Destination:
              <select name="destination"
                onChange={ this.handleUserData }>
                <option></option>
                <option name="destination"
                  value="Denver, CO"
                  onChange={ this.handleUserData }>
                  Denver, CO
                </option>
                <option name="destination"
                  value="Jacksonville, FL"
                  onChange={ this.handleUserData }>
                  Jacksonville, FL
                </option>
                <option name="destination"
                  value="Perth, AUS"
                  onChange={ this.handleUserData }>
                  Perth, AUS
                </option>
              </select>
            </label>
          </div>
          {this.state.dietaryRestrictions.map((restriction, i) => {
            return <div>
                      <input key={ restriction + i }
                        name={ restriction.label }
                        id={ restriction.id }
                        value={ restriction.label }
                        type="checkbox"
                        onChange={ () => this.handleToggleRestriction(restriction) }
                      />{ restriction.label }
                    </div>
          })}
          <button onClick={ this.handleSubmit }>Submit</button>
        </form>
    )
  }
}

export default UserInfo;
