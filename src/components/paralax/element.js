import React from 'react';
class El extends React.Component {
  render() {
    const style = {
      top: Math.round(this.props.startPosition - this.props.scroll / this.props.speed)
    }
    return (
      <div className={`element ${this.props.ele}`} style={style}>
        <img src={this.props.img}/>
      </div>
    );
  }
}

El.defaultProps = {
  img: React.PropTypes.string,
  ele: React.PropTypes.string,
  scroll: React.PropTypes.number,
  startPosition: React.PropTypes.number,
  speed: React.PropTypes.number
};

export default El;
