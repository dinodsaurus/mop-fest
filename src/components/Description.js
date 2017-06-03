import React, { Component } from 'react';

class Description extends Component {
  constructor() {
    super();
    this.state = { shown: false };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const mainDiv = document.getElementById("description");
    if(mainDiv.getBoundingClientRect().top < 500 && !this.state.shown) {
      this.setState({ shown: true})
    }
  }
  render() {
    const cls = this.state.shown ? "description" : "description hidden"
    return (
      <div id="description" className={cls}>
        <div className="content">
          <div><p className="grid grid2 push-left-1 info">Info</p></div>
          <div>
            <p className="grid grid3 push-left-1 main">
              Program is free and includes lectures, workshops, exhibitions, video screenings,
              interactive installations, performances, films and audio-visual installations
              integrated into it's music part.
            </p>
          </div>
          <div>
            <p className="grid grid2 push-left-1 smallText">
              The festival has so far held five times as annual regional festival which promotes
              the multimedia and digital culture, with an emphasis on exchange of knowledge and 
              creative use of new technologies in art, science and design.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Description;
