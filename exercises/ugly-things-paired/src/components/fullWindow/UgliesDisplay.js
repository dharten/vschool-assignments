import React, {Component} from "react";
import {connect} from "react-redux";

const styles = {
  textAlign: "center",
  fontFamily: "monospace",
  background: 
  img:{
    maxWidth: "300px"
  }

}

function UgliesDisplay(props) {
  const uglies = props.uglyThings.map((ugly, i) => {
      return(
        <div key={ ugly.title + i } style={ styles }>
          <h3>{ ugly.title }</h3>
          <img style={styles.img} className="img" src={ ugly.img }/>
          <h5>{ ugly.description}</h5>
        </div>
      )
    }
  )
  return(
    <ul>
      { uglies }
    </ul>
  )
}

export default connect(state => state, null)(UgliesDisplay);
