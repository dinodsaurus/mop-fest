import React, { Component } from 'react';

import Location from "./Location";

class Event extends Component {
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
    const breakingTop = document.getElementById(`breakingTop-${this.props.event.title}`);
    const breakingBottom = document.getElementById(`breakingBottom-${this.props.event.title}`);

    if (breakingTop.getBoundingClientRect().top < 0 &&
      breakingBottom.getBoundingClientRect().top > 100) {
      this.setState({ fixed: true });
    } else {
      this.setState({ fixed: false });
    }
  }
  renderLocation(location, i) {
    return (
      <Location
        key={i}
        location={location}
      />
    );
  }
  render() {
    const cls = this.state.fixed ? "eventTitle fixed" : "eventTitle"
    return (
      <div className="event">
        <div id={`breakingTop-${this.props.event.title}`} />
        <h2 className={cls} id={`title-${this.props.event.title}`}>{this.props.event.title}</h2>
        {this.props.event.locations.map(this.renderLocation.bind(this))}
        <div id={`breakingBottom-${this.props.event.title}`} />
      </div>
    );
  }
}

export default Event;
