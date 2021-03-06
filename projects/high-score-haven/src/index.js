import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Game from "./Game";

ReactDOM.render(
  <div className="main-container">
    <App />
    <div className="container">
      <Game />
    </div>
  </div>,
  document.getElementById('root')
)
