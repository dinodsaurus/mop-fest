import '../styles/schedule.styl'
import React from 'react';
import Day from './schedule/day';
import Filter from './schedule/filter';
import Title from './title'

import monday from '../data/monday.json';
import thursday from '../data/thursday.json';
import friday from '../data/friday.json';
import saturday from '../data/saturday.json';

import mon from '../images/23.05.svg';
import thu from '../images/26.05.svg';
import fri from '../images/27.05.svg';
import sat from '../images/28.05.svg';

class Schedule extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'Full Program',
      monday: monday.schedule,
      thursday: thursday.schedule,
      friday: friday.schedule,
      saturday: saturday.schedule,
      mondayFiltered: monday.schedule,
      thursdayFiltered: thursday.schedule,
      fridayFiltered: friday.schedule,
      saturdayFiltered: saturday.schedule
    };
  }
  componentDidMount() {
    window.scroll(0, 0);
    let { query } = this.props.location;
    if (query && query.id) {
      const id = parseInt(query.id);
      this.activateDate(id, query.day);
      const top = document.getElementById(query.day + id).getBoundingClientRect().top;
      window.scroll(0, top);

    }
    if (query.type) {
      this.changeFilter(query.type, query.type.substring(0,1));
    }
  }
  activateDate(id, d) {
    let day = this.state[d] || [];
    day.forEach(s => {
      if(s.id == id){
        s.active = true;
      } else {
        s.active = false;
      }
    });
    let res = {};
    res[d] = day;
    this.setState(res);
  }
  changeFilter(name, type){
    this.setState({filter: name});
    this.filterRes(type);
  }
  filterRes(type) {
    let mon = [];
    let thu = [];
    let fri = [];
    let sat = [];
    if(type === 'A') {
      this.setState({
        mondayFiltered: this.state.monday,
        thursdayFiltered: this.state.thursday,
        fridayFiltered: this.state.friday,
        saturdayFiltered: this.state.saturday
      })
    } else {
      this.state.monday.forEach(s => {
        if(s.type === type){
          mon.push(s);
        }
      });
      this.state.thursday.forEach(s => {
        if(s.type === type){
          thu.push(s);
        }
      });
      this.state.friday.forEach(s => {
        if(s.type === type){
          fri.push(s);
        }
      });
      this.state.saturday.forEach(s => {
        if(s.type === type){
          sat.push(s);
        }
      });
      this.setState({
        mondayFiltered: mon,
        thursdayFiltered: thu,
        fridayFiltered: fri,
        saturdayFiltered: sat
      })
    }
  }
  render() {
    return (
      <div className="schedule">
        <Title title="Schedule"/>
        <div className="container group">
          <Filter filter={this.state.filter} changeFilter={this.changeFilter.bind(this)}/>
          <Day img={mon} activateDate={this.activateDate.bind(this)} schedule={this.state.mondayFiltered} day="MON" dayFull="monday"/>
          <Day img={thu} activateDate={this.activateDate.bind(this)} schedule={this.state.thursdayFiltered} day="THU" dayFull="thursday"/>
          <Day img={fri} activateDate={this.activateDate.bind(this)} schedule={this.state.fridayFiltered} day="FRI" dayFull="friday"/>
          <Day img={sat} activateDate={this.activateDate.bind(this)} schedule={this.state.saturdayFiltered} day="SAT" dayFull="saturday"/>
        </div>
      </div>
    );
  }
}

Schedule.defaultProps = {
};

export default Schedule;
