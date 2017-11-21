import React from "react";
// import TableRow from "./TableRow"


class Form extends React.Component {
  constructor() {
    super();
    this.state = {
        name: "",
        game: "",
        date: "",
        score: "",
        players: []
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    // console.log(this.state.name);
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    const obj = { name: this.state.name, game: this.state.game, date: this.state.date,
    score: this.state.score };
    this.setState({ players: [...this.state.players, obj], name: "", game: "",
  date: "", score: "" })
    localStorage.setItem("players", JSON.stringify(this.state))
//     alert(`Name ${ this.state.name }
// Game: ${ this.state.game }
// Date: ${ this.state.date }
// Score: ${ this.state.score }`)
  }

  render() {
    return(
      <div>
        <form onSubmit={ this.handleSubmit }>
          <label>User Name</label>
          <div>
            <input required name="name" value={ this.state.name }
            onChange={ this.handleInput }/>
          </div>
          <label>Game</label>
          <div>
            <input required name="game" value={ this.state.game }
            onChange={ this.handleInput }/>
          </div>
          <label>Date</label>
          <div>
            <input name="date" value={ this.state.date }
            onChange={ this.handleInput } type="date"/>
          </div>
          <label>Score</label>
          <div>
            <input required name="score" value={ this.state.score }
            onChange={ this.handleInput } type="number"/>
          </div>
          <button>Submit</button>
        </form>
        <div>
          <table>
            <thead>
              <tr>
                <th width="150px">Name</th>
                <th width="150px">Game</th>
                <th width="150px">Date</th>
                <th width="150px">Score</th>
                <th width="150px">Bragging Rights</th>
              </tr>
            </thead>
            {/* <tbody>
              { this.state.players.map((player, i) => {
                return <TableRow key={ player.name + i } player={ player.name }
                  game={ player.game } date={ player.date } score={ player.score }
                  rights={ player.braggingRights }/>
              })}
            </tbody> */}
          </table>
        </div>
      </div>
    )
  }
}

export default Form;
