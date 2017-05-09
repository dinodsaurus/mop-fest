import React, { Component } from 'react';

class SingleEvent extends Component {
  renderEvent(event, i) {
    let image;
    let img;
    if (event.image) {
      image = require(`../images/schedule/${event.image}`);
      img = <img src={image} alt={event} />;
    }
    let cls = i + 1 === this.props.event.event.length ? "eventName last" : "eventName";
    return (
      <div key={i} className={cls}>
        <span>{event.name}</span>
        {img}
      </div>
    );
  }
  renderNumber() {
    switch (this.props.event.description) {
      case "lecture": {
        return <span className="number">&#9312;</span>
      }
      case "workshop": {
        return <span className="number">&#9313;</span>
      }
      case "exhibition": {
        return <span className="number">&#9314;</span>
      }
      case "music": {
        return <span className="number">&#9315;</span>
      }
      case "film": {
        return <span className="number">&#9316;</span>
      }
      default: {
        return "";
      }
    }
  }
  render() {
    const time = this.props.event.time.split("-")[0];
    return (
      <div className="SingleEvent">
        <span className="time">{time}</span>
        {this.props.event.event.map(this.renderEvent.bind(this))}
        <span className="location">
        {this.renderNumber()}<br />
        {this.props.location.location}
        </span>
      </div>
    );
  }
}

export default SingleEvent;
