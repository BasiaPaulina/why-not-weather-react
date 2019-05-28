import React, { Component } from "react";
import "./WeatherMain.css";
import Search from "./Search";
import axios from "axios";
import Icon from "./Icon";
import DateMain from "./DateMain";
import Forecast from "./Forecast";

export default class WeatherMain extends Component {
  constructor(props){
  super(props);
  this.state = {
    loaded: false,
    city: this.props.city
  };
  }
  refreshFromCity = (city) => {
  let root = "https://api.openweathermap.org/data/2.5";
    let path = "weather";
    let apiKey = "ace2c200d6c61096c76082a9e2846e29";
    let units = "metric";
    let params = `?${city}&appid=${apiKey}&units=${units}`;
    let url = `${root}/${path}${params}`;
  axios.get(url).then((response) => {
    console.log(response);
this.setState({
  loaded: true,
  city: response.data.name,
  description: response.data.weather[0].description,
  temperature: Math.round(response.data.main.temp),
  humidity: response.data.main.humidity,
  wind: response.data.wind.speed,
  icon: response.data.weather[0].icon,
  date: new Date(response.data.dt*1000)
});
  })
}

refreshFromLatitudeAndLongitude = (latitude, longitude) => {
  this.refreshFromCity(`lat=${latitude}&lon=${longitude}`);
};
refresh = city => {
  this.refreshFromCity(`q=${city}`);
}

  render() {
   if (this.state.loaded) {
    return (
      <div>
        <div className="weather-main-heading">
          <h1 className="weather-main-city">{this.state.city}</h1>
          <p className="weather-main-date"><DateMain date={this.state.date} /></p>
          <p className="weather-main-description">{this.state.description}</p>
        </div>
        <Icon icon={this.state.icon} />
        <p className="weather-main-temp">{this.state.temperature} °C | °F </p>
        <ul className="weather-main-weather-list">
          <li>Humidity: {this.state.humidity} %</li>
          <li>Wind: {this.state.wind} km/h</li>
        </ul>
        <div>
          <Search updateForm={this.refresh}/>
          <div className="container app-forecast">
        <div className="row">
          <Forecast day={1} city={this.state.city}/>
          <Forecast day={2} city={this.state.city}/>
          <Forecast day={3} city={this.state.city}/>
          <Forecast day={4} city={this.state.city}/>
          <Forecast day={5} city={this.state.city}/>
          <Forecast day={6} city={this.state.city}/>
        </div>
      </div>
        </div>
      </div> 
    );
   } else {
     return(<div>
      <h1 className="weather-main-city">Weather is Loading</h1>
      <div>
          <Search updateForm={this.refresh}/>
      </div>
    </div>);
     
   }
  
  }
}
