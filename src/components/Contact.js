import React, { Component } from 'react';
import goUp from "../images/arrow_scroll_up.svg";
require('smoothscroll-polyfill').polyfill();

class Contact extends Component {
  constructor() {
    super();
    this.state = { shown: false };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const mainDiv = document.getElementById("contact");
    if(mainDiv.getBoundingClientRect().top < 500 && !this.state.shown) {
      this.setState({ shown: true})
    }
  }
  goToTop() {
    const landing = document.getElementById("landing");
    landing.scrollIntoView({ behavior: "smooth" });
  }
  render() {
    const cls = this.state.shown ? "description contact" : "description contact hidden";
    return (
      <div className={cls} id="contact">
        <div className="content">
          <div><p className="info">Contact</p></div>
          <div><p>
          mopfest<vbr />@gmail.com<br />+385 955127795
          </p></div>

          <div><p className="info follow">Follow</p></div>
          <div><p className="grid grid1 push-left-3">
          <a href="https://facebook.com/MOPfest/?ref=br_rs" target="_blank" className="underline">
            Facebook
          </a><br />
          <a href="https://www.instagram.com/mopfest/" target="_blank" className="underline">
            Instagram
          </a><br />
          <a href="https://twitter.com/MOPFest" target="_blank" className="underline">
            Twitter
          </a><br />
          </p></div>

          <div><p className="grid grid1 push-left-3 designedBy">
            Designed by 
          <a href="https://dribbble.com/Mubrin" target="_blank" className="underline">Fran</a>
          and
          <a href="http://markohrastovec.com/" target="_blank" className="underline">Marko</a>
          <br />
            Coded by
          <a href="http://reactor.studio/" target="_blank" className="underline" >Reactor</a>
          <br />
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