import '../styles/menu.styl';
import React from 'react';
import { Link, browserHistory } from 'react-router';
import classNames from 'classnames';

import Loading from 'stores/loading';

class Header extends React.Component {
  translate() {
    this.props.moveUp()
  }
  goTo() {
    this.props.moveUp()
    Loading.dispatch({type: 'LOADING'});
    setTimeout(() => {
      browserHistory.push(`schedule`)
      Loading.dispatch({type: 'HIDE'});
      setTimeout(() => {
        Loading.dispatch({type: 'NOLOADING'});
      }, 700)
    }, 700);
  }
  render() {
    var menuCls = classNames({
       'menu-screen': true,
       'active': this.props.active,
       'exiting': this.props.exiting,
       'noAnimation': this.props.noAnimation
     });
    return (
      <div className={menuCls}>
        <ul>
          <li><Link onClick={this.translate.bind(this)} to="/">Home</Link></li>
          <li><a onClick={this.goTo.bind(this)} to="/schedule">Schedule</a></li>
          <li><Link onClick={this.translate.bind(this)} to="/speakers">Speakers</Link></li>
          <li><a href="http://spancirfest.com/" target="_blank">Špancirfest</a></li>
          <li><Link onClick={this.translate.bind(this)} to="/partners">Partners</Link></li>
          <li><Link onClick={this.translate.bind(this)} to="/about">About us</Link></li>
          <li><a target="_blank" href="https://www.facebook.com/events/456606194525596/">RSVP</a></li>
        </ul>
      </div>
    );
  }
}

Header.defaultProps = {
  moveUp: React.PropTypes.func
};

export default Header;
