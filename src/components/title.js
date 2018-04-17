import React from 'react';

class Title extends React.Component {
  render() {
    const img = {
      backgroundImage: `url("${this.props.bck}")`
    }
    return (
      <div className="title" style={img}>
        <h2>{this.props.title}</h2>
      </div>
    );
  }
}

Title.defaultProps = {
  title: React.PropTypes.string,
  bck: React.PropTypes.string
};

export default Title;
