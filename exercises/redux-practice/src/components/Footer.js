import React from "react";

const styles = {
  borderTop: "black solid 2px",
  textAlign: "center",
  paddingTop: "20px",
  position: "absolute",
  width: "98%",
  bottom: "0",
  background: "#780206",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #061161, #780206)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #061161, #780206)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: "75px",
  color: "whitesmoke"
}

function Footer() {
  return(
    <h5 style={ styles }>Footer</h5>
  )
}

export default Footer;
