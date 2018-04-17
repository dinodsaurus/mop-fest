import React from 'react';
import {browserHistory} from 'react-router';
import Loading from 'stores/loading';

class Speakers extends React.Component {
  goTo(item) {
    Loading.dispatch({type: 'LOADING'});

    setTimeout(() => {
      browserHistory.push(`schedule?day=${item.day}&id=${item.id}`)
      Loading.dispatch({type: 'HIDE'});
      setTimeout(() => {
        Loading.dispatch({type: 'NOLOADING'});
      }, 700)
    }, 700)
  }
  renderItem(item, i) {
    return (<a onClick={this.goTo.bind(this, item)}  className="item" key={i}>
      <div className="img">
        <img src={`speak/${item.img}`}/>
        <div className="bck"></div>
      </div>
      <h2>{item.author}</h2>
      <p>{item.position}</p>
    </a>);
  }
  render() {
    return (
      <div className="speakersList">
        {this.props.list.map(this.renderItem.bind(this))}
      </div>
    );
  }
}

Speakers.defaultProps = {
  list: React.PropTypes.array
};

export default Speakers;
