import React, {Component} from "react";
import axios from "axios";
import Person from "./Person";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: []
    }
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get("https://swapi.co/api/people").then(response => {
      this.setState({ people: response.data.results })
    })
  }

  render() {
    return this.state.people.map((person) => {
      return <ol>{ person.vehicles }</ol>
    })
  }
}

export default App;
