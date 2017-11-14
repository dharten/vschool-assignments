import React, {Component} from "react";
import Box from "./Box";

class Container extends Component {
  constructor() {
    super();
    this.state = {
      bgColor: "red"
    }
    this.divChangeColor = this.divChangeColor.bind(this);
    }

  divChangeColor() {
    this.setState(prevState => {
      if (prevState.bgColor === "red") {
        return { bgColor: "blue"}
      } else {
        return { bgColor: "red"}
      }
    })
  }

  render() {
    return <Box colorChange={ this.divChangeColor } bgColor={ this.state.bgColor }/>
  }
}

export default Container;
