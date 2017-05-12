import React, { Component } from 'react';
import "./styles/Main.scss";

import Landing from "./components/Landing";
import Schedule from "./components/Schedule"
import Description from "./components/Description";
import Images from "./components/Images";
import Thanks from "./components/Thanks";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="hr" />
        <Landing />
        <Description />
        <Images />
        <Schedule />
        <Thanks />
        <Contact />
      </div>
    );
  }
}

export default App;
