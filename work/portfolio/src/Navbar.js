import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const styles = {
    // backgroundColor: "orange",
    height: "50px",
    fontSize: "30px",
    textAlign: "center",
    textDecoration: "none",
    color: "black",
    marginRight: "20px"
  }
  return(
    <div style={ styles }>
      <Link to="/" style={ styles }>Home</Link>
      <Link to="/about" style={ styles }>About</Link>
      <Link to="/services" style={ styles }>Services</Link>
      <Link to="/projects" style={ styles }>Projects</Link>
      <Link to="/contact" style={ styles }>Contact</Link>
    </div>
  )
}

export default Navbar;
