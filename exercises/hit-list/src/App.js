import React, {Component} from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      hitList: []
    }
  }

  componentDidMount() {
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
      this.setState({ hitList: response.data })
    })
  }

  render() {
    const styles = {
      textAlign: "center",
      marginLeft: "300px",
      marginRight: "300px",
      repeat: "none",
      border: "black solid 2px",
      height: "320px",
      backgroundColor: "grey",
    }

    const hitName = {
      width: "50%",
      margin: "0px"
    }

    const red = {
      backgroundColor: "red"
    }

    return this.state.hitList.map((hit, i) => {
      return <div style={ red }>
        <div key={ hit + i } style={ styles } width="300px">
          <span style={ hitName }>
            <h2>{ hit.name }</h2>
          </span>
          <span>
            <img alt="person to hit" src={ hit.image } width="250px" />
          </span>
        </div>
      </div>
    })
  }
}

export default App;
