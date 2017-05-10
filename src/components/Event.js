import React, { Component } from 'react';
import { StickyContainer, Sticky } from "react-sticky";

import Location from "./Location";

class Event extends Component {
  renderLocation(location, i) {
    return (
      <Location
        key={i}
        location={location}
      />
    );
  }
  render() {
    return (
      <StickyContainer className="eventWrapper">
        <div className="event">
        <Sticky>
            {
              ({ isSticky, wasSticky, style }) => {
                const cls = isSticky ? "eventTitle sticky" : "eventTitle";
                return (
                  <div style={{ ...style }}>
                    <h2 className={cls}>
                      {this.props.event.title}
                    </h2>
                  </div>
                )
              }
            }
          </Sticky>
          {this.props.event.locations.map(this.renderLocation.bind(this))}
        </div>
      </StickyContainer>
    );
  }
}

export default Event;
