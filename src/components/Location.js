import React, { Component } from 'react';

import SingleEvent from "./SingleEvent";

class Location extends Component {
  renderSingleEvent(event, i) {
    return (
      <SingleEvent
        event={event}
        key={i}
        location={this.props.location}
      />
    );
  }
  render() {
    return (
      <div className="location">
        {this.props.location.events.map(this.renderSingleEvent.bind(this))}
      </div>
    );
  }
}

export default Location;
