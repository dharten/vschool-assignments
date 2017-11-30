import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component{
  render() {
    return(
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/about" component={ About }/>
          <Route exact path="/services" component={ Services }/>
          <Route exact path="/projects" component={ Projects }/>
          <Route exact path="/contact" component={ Contact }/>
        </Switch>
        <Footer />
      </div>
    )
  }
}

export default App;
