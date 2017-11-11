import React from "react";

function Box({backgroundColor, title, subTitle, description}) {
  const styles = {
    backgroundColor,
    border: "solid black 2px",
    height: "300px",
    width: "20%",
    display: "inline-block",
    borderRadius: "50%",
    color: "rgb(40, 51, 117)",
    textAlign: "center"
  }
  const h1 = {
    marginTop: "50%",
  }
  return (
    <div style={styles}>
      <h1 style={h1}>{title}</h1>
      <h3>{subTitle}</h3>
      <h5>{description}</h5>
    </div>
  )
}

export default Box;
