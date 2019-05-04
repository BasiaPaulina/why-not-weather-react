import React, { Component } from "react";
import "./WeatherMain.css";

export default class WeatherMain extends Component {
  render() {
    return (
      <div>
        <div className="weather-main-body">
          <h1 className="weather-main-city">City</h1>
          <p className="weather-main-date">Day time</p>
          <p className="weather-main-description">Description</p>
          <img className="weather-main-icon" src="" alt="work in progress.." />
          <p className="weather-main-temp">Temp</p>
        </div>
        <ul className="weather-main-weather-list">
          <li>Percipition: %</li>
          <li>Humidity: %</li>
          <li>Wind: km/h</li>
        </ul>
      </div>
    );
  }
}
