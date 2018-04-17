import React from 'react';
import {Link} from 'react-router';
import classnames from 'classnames';
class Session extends React.Component {
  handleClick(e) {
    e.preventDefault();
    if (this.props.session.description) {
      this.props.activateDate(this.props.session.id, this.props.dayFull)
    }
  }
  renderLinks(session) {
    if (!session.links) {
      return [];
    }
    let links = [];
    Object.keys(session.links).forEach(function(key, i) {
      let link = <a key={i} target="_blank" href={session.links[key]}>{key}</a>
      links.push(link);
    });
    return links;
  }
  render() {
    const session = this.props.session;
    const links = this.renderLinks(session)
    let l = "";
    let type = '';
    var cls = classnames({
     'outer': true,
     'active': session.active
    });
    if (session.type) {
      type = <div className="type">{session.type}</div>
    }
    if (links.length){
      l = (<div className="links">{links}</div>);
    }
    return (
      <div className={cls} id={`${this.props.dayFull}${this.props.session.id}`}>
        <Link className="link" onUpdate={console.log("update")} to={{ pathname: '/schedule', query: { day: this.props.dayFull, id: this.props.session.id}}} onClick={this.handleClick.bind(this)}></Link>
        <div className="session group">
          <div className="time">
            <h5>OPENING</h5>
            <h4>{session.time}</h4>
            <p>{session.location}</p>
          </div>
          <div className="speaker">
            <h5>SPEAKER</h5>
            {type}
            <h4>{session.author}</h4>
            <p>{session.author_desc}</p>
            {l}
          </div>
          <div className="desc">
            <h5>DESCRIPTION</h5>
            <h4>{session.title}</h4>
            <p>{session.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

Session.defaultProps = {
};

export default Session;
