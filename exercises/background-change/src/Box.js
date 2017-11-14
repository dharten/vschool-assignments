import React from "react";

function Box(props) {
  const styles = {
    height: "200px",
    width: "200px",
    border: "black solid 1px",
    backgroundColor: props.bgColor,
    display: "inline-block"
  }
  return (
    <div style={ styles }  onClick={ props.colorChange }></div>
  )
}

export default Box;
