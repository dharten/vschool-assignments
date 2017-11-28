import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Footer from "./Footer";

function App() {
  return(
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route path = "/about" component = { About }/>
        <Route path = "/services" component = { Services }/>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
