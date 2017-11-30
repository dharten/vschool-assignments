import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  const styles = {
    textAlign: "center",
    textDecoration: "none",
    color: "black",
    margin: "2.5px"
  }
  return(
      <h4 style={ styles }>
        <span style={ {textDecoration: "none", color: "black", margin: "2.5px"} }>
          &copy; { year } Dan Harten
        </span>
        <Link to="https://www.linkedin.com/in/daniel-harten-742b80a9/"
          style={ {textDecoration: "none", color: "blue", margin: "2.5px"} }>LinkedIn
        </Link>
        <Link to="/contact"
          style={ {textDecoration: "none", color: "blue", margin: "2.5px"} }>Contact
        </Link>
      </h4>
  )
}

export default Footer;
