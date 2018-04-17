import '../styles/speakers.styl';

import React from 'react';
import SpeakerList from './speakers/speakerList';
import Title from './title'

import monday from '../data/monday.json';
import thursday from '../data/thursday.json';
import friday from '../data/friday.json';
import saturday from '../data/saturday.json';
class Speakers extends React.Component {
  constructor() {
    super();
    let mon = this.parseDay(monday.schedule, 'monday');
    let thu = this.parseDay(thursday.schedule, 'thursday');
    let fri = this.parseDay(friday.schedule, 'friday');
    let sat = this.parseDay(saturday.schedule, 'saturday');
    this.state = {
      list: this.createList(mon.concat(thu, fri, sat))
    }
  }
  parseDay(items, day) {
    items.forEach(i => {
      i.day = day;
    })
    return items;
  }
  createList(list) {
    let newList = [];
    list.forEach(l => {
      if (l.img) {
        if(l.img.constructor === Array) {
          l.img.forEach(i => {
            i.id = l.id
            i.day = l.day
            newList.push(i);
          })
        } else {
          newList.push(l)
        }
      }
    })
    return this.shuffle(newList);
  }
  shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }
    return array;
  }
  render() {
    return (
      <div className="speakers">
        <Title title="Speakers"/>
        <div className="container">
          <SpeakerList list={this.state.list}/>
        </div>
      </div>
    );
  }
}

Speakers.defaultProps = {
};

export default Speakers;
