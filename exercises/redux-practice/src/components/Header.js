import React from "react";

const styles = {
  textAlign: "center",
  paddingBottom: "20px",
  background: "#780206",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to left, #061161, #780206)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to left, #061161, #780206)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: "75px",
  color: "whitesmoke",
  width: "100%"
}

export default function Header() {
  return(
    <h1 style={ styles }>Fun things to do</h1>
  )
}
