import React, { Component } from "react";

export default class TimeForecast extends Component {
    constructor(props){
        super(props);
        this.state = {
          date: this.props.date
        };
    }
    render() {
        let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let weekDay = weekDays[this.state.date.getDay()];
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
 if (hour < 10 && minute < 10) {
    return (<div>{weekDay}, {hour}:0{minute}</div>);
  }
  if (hour < 10 && minute >= 10) {
    return (<div>{weekDay}, {hour}:{minute}</div>);
  }
  if (hour >= 10 && minute < 10) {
    return (<div>{weekDay}, {hour}:0{minute}</div>);
  } else {
    return (<div>{weekDay}, {hour}:{minute}</div>);
  }
}
}