import React, { Component } from 'react';
import goUp from "../images/arrow_scroll_up.svg";
require('smoothscroll-polyfill').polyfill();

class Contact extends Component {
  goToTop() {
    const landing = document.getElementById("landing");
    landing.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    return (
      <div className="description contact">
        <div className="content">
          <div><p className="info">Contact</p></div>
          <div><p>
          mopfest<vbr />@gmail.com<br />+035 955127795
          </p></div>

          <div><p className="info follow">Follow</p></div>
          <div><p className="grid grid1 push-left-3">
          <a href="#" target="_blank" >Facebook</a><br />
          <a href="#" target="_blank" >Instagram</a><br />
          <a href="#" target="_blank" >Twitter</a><br />
          </p></div>

          <div><p className="grid grid1 push-left-3 designedBy">
          Designed by Fran and Marko<br />
          Coded by Reactor<br />
          </p></div>
        </div>
        <a onClick={this.goToTop} className="goUp">
          <img src={goUp} alt="goUp" />
        </a>
        <p className="copyright">© Copyright 2017 MOP</p>
    </div>
    );
  }
}

export default Contact;
