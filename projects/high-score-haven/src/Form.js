import React from "react";
// import Table from "./Table"


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      game: "Color Flood",
      date: "",
      score: "",
      players: [],
      checked: false,
      smackTalk: [
        "I pity the fool.",
        <iframe width="860" height="615" src="https://www.youtube.com/embed/enMReCEcHiM?rel=0&amp;controls=0&amp;showinfo=0?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>,
        "When I was growing up, my family was so poor we couldn't afford to pay attention.",
        "I'm so good... I should be illegal!"
      ]
    }
    this.smack = "";
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSmack = this.handleSmack.bind(this);
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    sessionStorage.setItem("today", JSON.stringify(this.state))
    const obj = { name: this.state.name, game: this.state.game,
      date: this.state.date, score: this.state.score, checked: this.state.checked };
    this.setState({ players: [...this.state.players, obj],
      name: "", game: "Color Flood", date: "", score: "", checked: false })
    this.smack = this.state.checked ? this.state.smackTalk[Math.floor(Math.random()*this.state.smackTalk.length)] : null;
    e.target[4].checked = false
  }

  handleSmack(smack) {
    this.setState({ checked: smack.target.checked })
  }

  render() {
    const styles = {
      height: "400px",
      border: "solid white 2px",
      float: "right",
      marginTop: "100px",
      marginRight: "3%",
      marginLeft: "3%",
      minWidth: "560px",
      maxWidth: "1860px",
      backgroundColor: "#FF9800",
      textAlign: "center"
    }
    const sorting = this.state.players.sort((a, b) => {
      return b.score - a.score;
    })
    return(
      <div style={ styles }>
        <form onSubmit={ this.handleSubmit }>
          <label>User Name</label>
          <div>
            <input required name="name" value={ this.state.name } onChange={ this.handleInput }
              maxLength="12"/>
          </div>
          <label>Game</label>
          <div>
            <input name="game" value={ this.state.game } onChange={ this.handleInput }/>
          </div>
          <label>Date</label>
          <div>
            <input name="date" value={ this.state.date } onChange={ this.handleInput }
              type="date"/>
          </div>
          <label>Score</label>
          <div>
            <input required name="score" value={ this.state.score } onChange={ this.handleInput }
              type="number"/>
          </div>
          <div>
            <label>Smack!!</label>
            <input name="checked" onChange={ this.handleSmack } type="checkbox"/>
          </div>
          <button>Submit</button>
        </form>
        <table sortable={ this.state.score }>
           <thead>
             <tr>
               <th width="4%">#</th>
               <th width="24%">Username</th>
               <th width="24%">Game</th>
               <th width="24%">Date</th>
               <th width="24%">Score</th>
             </tr>
           </thead>
           <tbody>
             { sorting.map((player, i) => {
               return <tr key={ player.name + i }>
                   <td width="4%">{ i + 1 }</td>
                   <td width="24%">{ player.name }</td>
                   <td width="24%">{ player.game }</td>
                   <td width="24%">{ player.date }</td>
                   <td width="24%">{ player.score }</td>
                  </tr>
                })
              }
           </tbody>
         </table>
         <h3>{ this.smack }</h3>
        </div>

        // {/* <Table name={ this.state.name } game={ this.state.game }
        //   date={ this.state.date } score={ this.state.score }/> */}
    )
  }
}

export default Form;
