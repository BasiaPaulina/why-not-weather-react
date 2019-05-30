import React, { Component } from "react";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon.js";

export default class Forecast extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: this.props.city
    }
    let root = "https://api.openweathermap.org/data/2.5";
      let path = "forecast";
      let apiKey = "ace2c200d6c61096c76082a9e2846e29";
      let units = "metric";
      let params = `?q=${this.state.city}&appid=${apiKey}&units=${units}`;
      let url = `${root}/${path}${params}`;
      let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    axios.get(url).then((response) => {
      console.log(response.data);
  this.setState({
    loaded: true,
    city: response.data.city.name,
    description: response.data.list[this.props.day].weather[0].description,
    temperature: Math.round(response.data.list[this.props.day].main.temp),
    icon: response.data.list[this.props.day].weather[0].icon,
    day: weekDays[new Date(response.data.list[this.props.day].dt*1000).getDay()]
  });
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="card forecast-day col-sm-2">
        <div className="card-body">
          <h5 className="card-title">{this.state.day}</h5>
          <Icon icon={this.state.icon}/>
          <p className="card-text">{this.state.temperature} °C | °F</p>
        </div>
      </div>
    );
  }
}
