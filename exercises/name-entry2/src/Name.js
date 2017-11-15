import React from "react";

function Name(props) {
  return(
    <li>
      <button
        onClick={ props.delete }>
        Delete
      </button>
      { props.name }
    </li>
  )
}

export default Name;
