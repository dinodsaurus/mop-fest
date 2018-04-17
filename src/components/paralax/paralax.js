import '../../styles/paralax.styl'
import React from 'react';

import Element from './element';
import m from '../../images/m.png';
import o from '../../images/o.png';
import p from '../../images/p.png';
import arrow from '../../images/arrow_down_2.png';
import hand from '../../images/hand.png';
import ribon from '../../images/ribbon.png';
import spancir from '../../images/spancir.png';
import varazdin from '../../images/vz.png';
import www from '../../images/www.png';
import line from '../../images/line.png';
import mopribon from '../../images/mop_ribbon.png';
import mobileImage from '../../images/mobile_img.png';

class Paralax extends React.Component {
  constructor(){
    super()
    this.state = {}
    this.state.scroll = 0;
    this.state.elements = {
      m: 400,
      o: 600,
      p: 270,
      ribon: 600,
      mopribon: 1100,
      hand: 300,
      arrow: 100,
      spancir: 1000,
      varazdin: 800,
      www: 160,
      arrow2: 1050,
      hand2: 850,
      line: 300,
      line2: 500,
      line3: 1080
    }
  }
  generateRandomNumber(max, min){
    return Math.floor(Math.random() * (max - min)) + min;
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const scroll = this.getScroll();
    if (this.setState) {
      this.setState({scroll: scroll[1]});
    }
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

  render() {
    return (
      <div className="container">
        <div className="paralax">
          <Element img={m} ele="m" scroll={this.state.scroll} startPosition={this.state.elements.m} speed={2.5}/>
          <Element img={o} ele="o" scroll={this.state.scroll} startPosition={this.state.elements.o} speed={2}/>
          <Element img={p} ele="p" scroll={this.state.scroll} startPosition={this.state.elements.p} speed={3.5}/>
          <Element img={arrow} ele="arrow" scroll={this.state.scroll} startPosition={this.state.elements.arrow} speed={2}/>
          <Element img={hand} ele="hand" scroll={this.state.scroll} startPosition={this.state.elements.hand} speed={2.5}/>
          <Element img={ribon} ele="ribon" scroll={this.state.scroll} startPosition={this.state.elements.ribon} speed={2}/>
          <Element img={spancir} ele="spancir" scroll={this.state.scroll} startPosition={this.state.elements.spancir} speed={2.2}/>
          <Element img={varazdin} ele="varazdin" scroll={this.state.scroll} startPosition={this.state.elements.varazdin} speed={2.1}/>
          <Element img={www} ele="www" scroll={this.state.scroll} startPosition={this.state.elements.www} speed={2}/>
          <Element img={line} ele="line" scroll={this.state.scroll} startPosition={this.state.elements.line} speed={2}/>
          <Element img={line} ele="line2" scroll={this.state.scroll} startPosition={this.state.elements.line2} speed={1.9}/>
          <Element img={line} ele="line3" scroll={this.state.scroll} startPosition={this.state.elements.line3} speed={1.9}/>
          <Element img={mopribon} ele="mopribon" scroll={this.state.scroll} startPosition={this.state.elements.mopribon} speed={2.2}/>
          <Element img={arrow} ele="arrow2" scroll={this.state.scroll} startPosition={this.state.elements.arrow2} speed={2}/>
          <Element img={hand} ele="hand2" scroll={this.state.scroll} startPosition={this.state.elements.hand2} speed={2.3}/>
        </div>
        <div className="mobileImg">
          <img src={mobileImage} />
        </div>
      </div>
    );
  }
}

Paralax.defaultProps = {
};

export default Paralax;
