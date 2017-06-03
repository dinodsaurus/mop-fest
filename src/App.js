import React, { Component } from 'react';
import "./styles/Main.scss";

import Landing from "./components/Landing";
import Schedule from "./components/Schedule"
import Description from "./components/Description";
import Images from "./components/Images";
import Thanks from "./components/Thanks";
import Contact from "./components/Contact";
import Loading from "./components/Loading";

class App extends Component {
  constructor() {
    super();
    this.state = { loading: true };

    const min = 1.5;
    const max = 3;
    const rand = Math.random() * (max - min) + min;
    setTimeout(this.removeLoading.bind(this), rand * 1000);
  }

  removeLoading() {
    this.setState({ loading: false });
  }

  render() {
    const content = this.state.loading ? <Loading /> : (
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

    return content;
  }
}

export default App;
