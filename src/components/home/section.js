import React from 'react';

class Section extends React.Component {
  render() {
    return (
      <div className="section">
        <img src={this.props.title}/>
        <div className="video video1">
          <img src={this.props.img1}/>
        </div>
        <div className="video video2">
          <img src={this.props.img2}/>
        </div>
      </div>
    );
  }
}

export default Section;
