import React, { Component } from "react";
import "./WeatherMain.css";
import Axios from "axios";
import Api from "./Api";

export default class WeatherMain extends Component {
constructor(props){
  super(props);
  this.state = {
    city: "current location",
    unit: "metric",
    date: "current date"
  }
}
  render() {
    Axios.get(<Api />).then(response => {
      return {
name: response.data.name,
      }
    })
    return (
      <div>
        <div className="weather-main-heading">
          <h1 className="weather-main-city">{this.state.city}</h1>
          <p className="weather-main-date">Day time</p>
          <p className="weather-main-description">Description</p>
        </div>
        <img className="weather-main-icon" src="" alt="work in progress.." />
        <p className="weather-main-temp">Temp °C | °F </p>
        <ul className="weather-main-weather-list">
          <li>Percipition: %</li>
          <li>Humidity: %</li>
          <li>Wind: km/h</li>
        </ul>
      </div>
    );
  }
}
