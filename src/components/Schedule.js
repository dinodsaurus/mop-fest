import React, { Component } from 'react';
import { StickyContainer, Sticky } from "react-sticky";

import events from "../data/events.json";
import Event from "./Event";

class Schedule extends Component {
  constructor() {
    super();
    this.state = { shown: false };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const mainDiv = document.getElementById("schedule");
    if(mainDiv.getBoundingClientRect().top < 500 && !this.state.shown) {
      this.setState({ shown: true})
    }
  }
  renderEvent(event, i) {
    return (
      <Event
        key={i}
        event={event}
      />
    );
  }

  renderStickyTitle(isSticky, wasSticky, style) {
    const cls = isSticky ? "scheduleTitle sticky" : "scheduleTitle";
    return (
      <div className={cls} style={{ ...style }}>
        <h1>Schedule</h1>
      </div>
    )
  }

  renderStickyLegend(isSticky, wasSticky, style) {
    const cls = isSticky ? "listWrapper sticky" : "listWrapper";
    return (
      <div className={cls} style={{ ...style }}>
        <div className="list">
          <span>&#9312; lecture</span>
          <span>&#9313; workshop</span>
          <span>&#9314; exhibition</span>
          <span>&#9315; music</span>
          <span>&#9316; film </span>
        </div>
      </div>
    )
  }

  render() {
    const cls = this.state.shown ? "" : "hidden";
    return (
      <StickyContainer>
        <div id="schedule" className={cls}>
          <Sticky>
            {({isSticky, wasSticky, style}) => this.renderStickyTitle(isSticky, wasSticky, style)}
          </Sticky>
          <Sticky>
            {({isSticky, wasSticky, style}) => this.renderStickyLegend(isSticky, wasSticky, style)}
          </Sticky>
          <div>
            {events.map(this.renderEvent)}
          </div>
        </div>
      </StickyContainer>
    );
  }
}

export default Schedule;
