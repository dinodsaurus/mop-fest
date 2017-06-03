import React, { Component } from 'react';

import imageSource1 from "../images/collection/gregor_zakelj_img.jpg";
import imageSource2 from "../images/collection/people_img.jpg";
import imageSource3 from "../images/collection/ornomenti_III_img.jpg";
import imageSource4 from "../images/collection/chui_music_img.jpg";
import imageSource5 from "../images/collection/hdd_workshop_img.jpg";
import imageSource6 from "../images/collection/degordian_img.jpg";

class Images extends Component {
    constructor() {
    super();
    this.state = { shown: false };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const mainDiv = document.getElementById("imagesDiv");
    if(mainDiv.getBoundingClientRect().top < 500 && !this.state.shown) {
      this.setState({ shown: true})
    }
  }
  render() {
    const cls = this.state.shown ? "images" : "images hidden"
    return (
      <div className={cls} id="imagesDiv">
        <div className="wrapper image1">
          <img src={imageSource1} alt="mop" />
          <div>
            <p>2014</p>
            <p>Gregor Zakelj</p>
          </div>
        </div>
        <div className="wrapper image2">
          <img src={imageSource2} alt="mop" />
          <div>
            <p>2013</p>
            <p>People</p>
          </div>
        </div>
        <div className="wrapper image3">
          <img src={imageSource3} alt="mop" />
          <div>
            <p>2016</p>
            <p>ornamenti III</p>
          </div>
        </div>
        <div className="wrapper image4">
          <img src={imageSource4} alt="mop" />
          <div>
            <p>2015</p>
            <p>chui music</p>
          </div>
        </div>
        <div className="wrapper image5">
          <img src={imageSource5} alt="mop" />
          <div>
            <p>2016</p>
            <p>hdd workshop</p>
          </div>
        </div>
        <div className="wrapper image6">
          <img src={imageSource6} alt="mop" />
          <div>
            <p>2016</p>
            <p>Degordian</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Images;
