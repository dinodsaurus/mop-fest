import React, { Component } from 'react';

class Thanks extends Component {
  constructor() {
    super();
    this.state = { shown: false };
  }
  componentWillMount() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  onScroll() {
    const mainDiv = document.getElementById("thanks");
    if(mainDiv.getBoundingClientRect().top < 500 && !this.state.shown) {
      this.setState({ shown: true})
    }
  }
  render() {
    const cls = this.state.shown ? "description" : "description hidden";
    return (
      <div className={cls} id="thanks">
        <div className="content">
          <div><p className="grid grid2 push-left-1 info">Partners</p></div>
          <div>
            <p className="grid grid3 push-left-1 main">
              Many thanks to all who support us and without whom the festival would not exist.
            </p>
          </div>
          <div>
            <p className="grid grid2 push-left-1 smallText">
              Partner of Association and co-organizer of multimedia festival is Varaždin Turist Board. 
              General sponsors of the festival are the Student Association of the University North and 
              University North.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Thanks;
