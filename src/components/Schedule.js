import React, { Component } from 'react';

import events from "../data/events.json";
import Event from "./Event";

class Schedule extends Component {
  constructor() {
    super();
    this.state = {
      fixed: false
    }
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const breakingTop = document.getElementById("breakingTop");
    const breakingBottom = document.getElementById("breakingBottom");
    if (
      breakingTop.getBoundingClientRect().top < 0 && breakingBottom.getBoundingClientRect().top > 80) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }
  renderEvent(event, i) {
    return (
      <Event
        key={i}
        event={event}
        fixedDate={i === this.state.fixedDate}
      />
    );
  }
  render() {
    const cls = this.state.fixed ? "scheduleTitle fixed" : "scheduleTitle";
    return (
      <div id="schedule">
        <div id="breakingTop" />
        <div className={cls}>
          <h1>Schedule</h1>
          <div className="list">
            <span>
              &#9312; lecture<br />
              &#9313; workshop<br />
              &#9314; exhibition<br />
              &#9315; music<br />
              &#9316; film
            </span>
          </div>
        </div>
        <div>
          {events.map(this.renderEvent.bind(this))}
          <div id="breakingBottom" />
        </div>
      </div>
    );
  }
}

export default Schedule;
