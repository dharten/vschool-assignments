import React from "react";

class Table extends React.Component {

  render() {
    const styles = {
      width: "50%"
    }
    return(
      <table>
         <thead>
           <tr>
             <th>#</th>
             <th>Username</th>
             <th>Game</th>
             <th>Date</th>
             <th>Score</th>
           </tr>
         </thead>
         <tbody>
           { this.props.players.map((player, i) => {
             return <tr key={ player.name + i }>
                 <td>{ i + 1 }</td>
                 <td>{ player.name }</td>
                 <td>{ player.game }</td>
                 <td>{ player.date }</td>
                 <td>{ player.score }</td>
                </tr>
              })
            }
         </tbody>
       </table>
    )
  }
}

export default Table;
