import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    top: "0",
    height: "50px",
    width: "100%",
    position: "absolute",
    textAlign: "center",
  }
  return(
    <div style= { styles }>
      <Link margin="10px" to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
    </div>
  )
}

export default Navbar;
