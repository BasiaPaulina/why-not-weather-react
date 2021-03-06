import React, { Component } from "react";

export default class DateMain extends Component {
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
    return (<p>{dayOfMonth} {weekDay} {year}, {hour}:0{minute}</p>);
  }
  if (hour < 10 && minute >= 10) {
    return (<p>{dayOfMonth} {weekDay} {year}, {hour}:{minute}</p>);
  }
  if (hour >= 10 && minute < 10) {
    return (<p>{dayOfMonth} {weekDay} {year}, {hour}:0{minute}</p>);
  } else {
    return (<p>{dayOfMonth} {weekDay} {year}, {hour}:{minute}</p>);
  }
}
}