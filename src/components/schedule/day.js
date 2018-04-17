import '../../styles/day.styl'
import React from 'react'

import Session from './session'
class Day extends React.Component {
  renderSession(session, i){
    return <Session key={i} dayFull={this.props.dayFull} activateDate={this.props.activateDate} session={session}/>;
  }
  render() {
    const image = {
      'backgroundImage': 'url(' + this.props.img + ')'
    }
    return (
      <div className="day">
        <div className="head">
          <h3>{this.props.day}</h3>
          <div className="img" style={image}></div>
        </div>
        <div className="sessions">
          {this.props.schedule.map(this.renderSession.bind(this))}
        </div>
      </div>
    );
  }
}

Day.defaultProps = {
};

export default Day;
