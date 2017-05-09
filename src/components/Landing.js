import React, { Component } from 'react';
import mopLogo from "../images/mop_6.svg";
import arrow from "../images/arrow_scroll_down.svg";
require('smoothscroll-polyfill').polyfill();

class App extends Component {
  scrollToSchedule() {
    const schedule = document.getElementById("schedule");
    schedule.scrollIntoView({ behavior: "smooth" });
  }
  scrollDown() {
    const description = document.getElementById("description");
    description.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="landing" id="landing">
        <span className="cornerText">
          MOP Špancirfest<br />
          multimedia festival<br />
          4.5.—13.5.2017.<br />
          Varaždin
        </span>
        <a
          className="cornerProgram"
          onClick={this.scrollToSchedule}
        >Program</a>
        <a className="scrollDown" onClick={this.scrollDown} >
          <img src={arrow} alt="arrowDown" />
          scroll down
        </a>
        <img src={mopLogo} alt="mopLogo" className="logo" />
      </div>
    );
  }
}

export default App;
