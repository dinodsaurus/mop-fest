import '../styles/home.styl';
import React from 'react';
import Section from './home/section';
import {browserHistory} from 'react-router';
import Loading from 'stores/loading';

import workshops from '../images/workshops_home.svg';
import lectures from '../images/lectures_home.svg';
import exhibitions from '../images/exibition_home.svg';

import workshopPic from '../images/img_home_workshops_1.png';
import workshopPic2 from '../images/img_home_workshops_2.png';

import lecturesPic from '../images/img_home_lectures_1.png';
import lecturesPic2 from '../images/img_home_lectures_2.png';

import exibitionPic from '../images/img_home_exhibitions_1.png';
import exibitionPic2 from '../images/img_home_exhibitions_2.png';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scroll: 0
    }
    this.scroll = this.scroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scroll);
  }
  scroll() {
    const scroll = this.getScroll();
    this.setState({scroll: scroll[1]});
  }
  getScroll() {
   if(window.pageYOffset!= undefined){
    return [pageXOffset, pageYOffset];
   }
   else{
    var sx, sy, d= document, r= d.documentElement, b= d.body;
    sx= r.scrollLeft || b.scrollLeft || 0;
    sy= r.scrollTop || b.scrollTop || 0;
    return [sx, sy];
   }
  }
  goTo(type) {
    Loading.dispatch({type: 'LOADING'});
    setTimeout(() => {
      browserHistory.push(`schedule?type=${type}`)
      Loading.dispatch({type: 'NOLOADING'});
    }, 700);
  }
  render() {
    return (
      <div className='home'>
        <div className='container'>
          <a onClick={this.goTo.bind(this, 'Workshops')}>
            <Section title={workshops} img1={workshopPic} img2={workshopPic2} scroll={this.state.scroll} start={1400}/>
          </a>
          <a onClick={this.goTo.bind(this, 'Lectures')}>
            <Section title={lectures} img1={lecturesPic} img2={lecturesPic2} scroll={this.state.scroll} start={1400} imgStart={3000}/>
          </a>
          <a onClick={this.goTo.bind(this, 'Exhibitions')}>
            <Section title={exhibitions} img1={exibitionPic} img2={exibitionPic2} scroll={this.state.scroll} start={1400}/>
          </a>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
