import React from "react";

class TableRow extends React.Component {

  render(props) {
    return(
      <tr>
        <td>{ props.player }</td>
        <td>{ props.game }</td>
        <td>{ props.date }</td>
        <td>{ props.score }</td>
      </tr>
    )
  }
}

export default TableRow;
