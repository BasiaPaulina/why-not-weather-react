import React, { Component } from "react";
import "./Forecast.css";
import axios from "axios";

export default class Forecast extends Component {
  constructor(props){
    super(props);
    let city = this.props.city;
    let root = "https://api.openweathermap.org/data/2.5";
      let path = "forecast";
      let apiKey = "ace2c200d6c61096c76082a9e2846e29";
      let units = "metric";
      let params = `?${city}&appid=${apiKey}&units=${units}`;
      let url = `${root}/${path}${params}`;
      let weekDays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    axios.get(url).then((response) => {
      console.log(response);
  this.state = {
    loaded: true,
    city: response.data.name,
    description: response.data.weather[0].description,
    temperature: Math.round(response.data.main.temp),
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed,
    icon: response.data.weather[0].icon,
    day: weekDays[new Date(response.data.list[this.props.day*6].dt*1000).getDay()]
  }
    })
  }

  render() {
    console.log(this.state);
    return (
      <div className="card forecast-day col-sm-2">
        <div className="card-body">
          <h5 className="card-title"></h5>
          <img src="" alt="Weather Description" />
          <p className="card-text">Temp °C | °F</p>
        </div>
      </div>
    );
  }
}
