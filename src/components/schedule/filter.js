import React from 'react';
import classnames from 'classnames';

class Filter extends React.Component {
  constructor() {
    super();
    this.state = {
      active: false
    }
  }
  toggleFilter() {
    this.setState({active: !this.state.active})
  }
  changeFilter(name, type) {
    this.props.changeFilter(name, type);
    this.toggleFilter();
  }
  render() {
    var cls = classnames({
     'filters': true,
     'active': this.state.active
    });
    return (
      <div className={cls}>
        <h3 onClick={this.toggleFilter.bind(this)}>{this.props.filter || 'All'}</h3>
        <ul>
          <li onClick={this.changeFilter.bind(this, 'Lecture', 'L')} className="group">
            <p>Lecture</p>
            <div className="circle">
              L
            </div>
          </li>
          <li onClick={this.changeFilter.bind(this, 'Workshop', 'W')} className="group">
            <p>Workshops</p>
            <div className="circle">
              w
            </div>
          </li>
          <li onClick={this.changeFilter.bind(this, 'Exhibition', 'E')} className="group">
            <p>Exhibitions</p>
            <div className="circle">
              E
            </div>
          </li>
          <li onClick={this.changeFilter.bind(this, 'Party', 'P')} className="group">
            <p>Party</p>
            <div className="circle">
              P
            </div>
          </li>
          <li onClick={this.changeFilter.bind(this, 'Full Program', 'A')} className="group">
            <p>Full Program</p>
            <div className="circle">
              F
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Filter;
