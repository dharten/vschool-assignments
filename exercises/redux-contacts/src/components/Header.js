import React from "react";

const styles = {
  textAlign: "center",
  color: "whitesmoke",
  background: "#070000",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #070000, #4C0001, #070000)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #070000, #4C0001, #070000)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  borderRadius: "50%",
  minWidth: "338px",
}

export default function Header(props) {
  return (
    <header style={ styles }>
      <h1>Contacts</h1>
    </header>
  )
}
