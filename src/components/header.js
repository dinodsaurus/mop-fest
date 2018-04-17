import '../styles/header.styl';
import React from 'react';
import Menu from './menu'
class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
    this.state.showMenu = false;
    this.state.exiting = false;
    this.state.noAnimation = false;
  }
  showMenu(e) {
    e.preventDefault();
    this.setState({showMenu: !this.state.showMenu});
  }
  moveUp(){
    this.setState({
      exiting: true,
      showMenu: false
    })
    // move the menu back down
    setTimeout(() => {
      this.setState({
        exiting: false,
        noAnimation: true
      })
      setTimeout(() => {
        this.setState({
          noAnimation: false
        })
      }, 100);
    }, 1000);
  }
  render() {
    var text = 'Menu';
    if (this.state.showMenu) {
      text = 'Close';
    }
    return (
      <div className="header">
        <div className="menu">
          <div className="double"></div>
          <a className="menuLink" onClick={this.showMenu.bind(this)}>{text}</a>
          <Menu noAnimation={this.state.noAnimation} active={this.state.showMenu} exiting={this.state.exiting} moveUp={this.moveUp.bind(this)}/>
        </div>
          <h1>MOP<br/>
          ŠPANCIRFEST<br/>
          Multimedia festival<br/>
          23.5. — 28.5.2016.<br/>
          Varaždin</h1>
      </div>
    );
  }
}

Header.defaultProps = {
};

export default Header;
