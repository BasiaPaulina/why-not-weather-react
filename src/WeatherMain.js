import React, { Component } from "react";
import "./WeatherMain.css";
import axios from "axios";
import Api from "./Api";

export default class WeatherMain extends Component {
constructor(props){
  super(props);
  this.state = {
    loaded: false,
  };

  let root = "https://api.openweathermap.org/data/2.5";
    let path = "weather";
    let apiKey = "ace2c200d6c61096c76082a9e2846e29";
    let city = "Lisbon";
    let units = "metric";
    let paths = `?q=${city}&appid=${apiKey}&units=${units}`;
    let url = `${root}/${path}${paths}`;
  axios.get(url).then((response) => {
console.log(response);
  });
}

  render() {
   if (this.state.loaded) {
    return (
      <div>
        <div className="weather-main-heading">
          <h1 className="weather-main-city">City</h1>
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
   } else {
     return(<div>
      <h1 className="weather-main-city">Weather is Loading</h1>
    </div>);
     
   }
  
  }
}
