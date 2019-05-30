import React, { Component } from "react";

export default class Date extends Component {
    constructor(props){
        super(props);
        this.state = {
          date: this.props.date
        };
    }
    render() {
        let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let year = this.state.date.getFullYear();
        let weekDay = weekDays[this.state.date.getDay()];
        let dayOfMonth = this.state.date.getDate();
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
 if (hour < 10 && minute < 10) {
    return (<div>{dayOfMonth} {weekDay} {year}, {hour}:0{minute}</div>);
  }
  if (hour < 10 && minute >= 10) {
    return (<div>{dayOfMonth} {weekDay} {year}, {hour}:{minute}</div>);
  }
  if (hour >= 10 && minute < 10) {
    return (<div>{dayOfMonth} {weekDay} {year}, {hour}:0{minute}</div>);
  } else {
    return (<div>{dayOfMonth} {weekDay} {year}, {hour}:{minute}</div>);
  }
}
}