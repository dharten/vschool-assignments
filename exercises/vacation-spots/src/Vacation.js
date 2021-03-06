import React, {Component} from "react";

class Vacation extends Component {
  constructor(){
    super();
  }
  render() {
    const styles = {
      backgroundColor: this.props.backgroundColor,
      height: "200px",
      width: "18%",
      border: "solid black 2px",
      display: "inline-block",
      textAlign: "center",
      verticalAlign: "top",
      marginLeft: "13px"
    }
  return (
    <div style={styles}>
      <h1>{ this.props.title }</h1>
      <h2>{ this.props.price }</h2>
      <h3>{ this.props.season }</h3>
    </div>
  )}
}
export default Vacation;
