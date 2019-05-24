import React, { Component } from "react";
import "./WeatherMain.css";
import axios from "axios";
import Api from "./Api";

export default class WeatherMain extends Component {
constructor(props){
  super(props);
  this.state = {
    loaded: false,
    city: "Lisbon"
  };

  let root = "https://api.openweathermap.org/data/2.5";
    let path = "weather";
    let apiKey = "ace2c200d6c61096c76082a9e2846e29";
    let units = "metric";
    let paths = `?q=${this.state.city}&appid=${apiKey}&units=${units}`;
    let url = `${root}/${path}${paths}`;
  axios.get(url).then((response) => {
    console.log(response);
this.setState({
  loaded: true,
  city: response.data.name,
  description: response.data.weather[0].description,
  temperature: Math.round(response.data.main.temp),
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: response.data.weather[0]
});
  })
}

  render() {
   if (this.state.loaded) {
    return (
      <div>
        <div className="weather-main-heading">
          <h1 className="weather-main-city">{this.state.city}</h1>
          <p className="weather-main-date">Day time</p>
          <p className="weather-main-description">{this.state.description}</p>
        </div>
        <img className="weather-main-icon" src="" alt="work in progress.." />
        <p className="weather-main-temp">{this.state.temperature} °C | °F </p>
        <ul className="weather-main-weather-list">
          <li>Humidity: {this.state.humidity} %</li>
          <li>Wind: {this.state.wind} km/h</li>
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
