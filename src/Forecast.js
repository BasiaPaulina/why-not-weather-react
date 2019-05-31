import React, { Component } from "react";
import "./Forecast.css";
import axios from "axios";
import Icon from "./Icon.js";
import TimeForecast from "./TimeForecast";
import TemperatureToggle from "./TemperatureToggle";

export default class Forecast extends Component {
  constructor(props){
    super(props);
    this.state = {
      loaded: false,
      city: props.city
    }
  }
  componentWillMount() {
    this.refresh();
  }  
  
  componentWillReceiveProps(nextProps) {
    this.setState({ city: nextProps.city }, () => {
      this.refresh();
    });}
   refresh = () => {
 let root = "https://api.openweathermap.org/data/2.5";
    let path = "forecast";
    let apiKey = "ace2c200d6c61096c76082a9e2846e29";
    let units = "metric";
    let params = `?q=${this.state.city}&appid=${apiKey}&units=${units}`;
    let url = `${root}/${path}${params}`;
  axios.get(url).then((response) => {
    console.log(response.data);
this.setState({
  loaded: true,
  city: this.props.city,
  description: response.data.list[this.props.day].weather[0].description,
  temperature: Math.round(response.data.list[this.props.day].main.temp),
  icon: response.data.list[this.props.day].weather[0].icon,
  date: new Date(response.data.list[this.props.day].dt*1000)
});
  })
   }
 
  render() {
    if (this.state.loaded) {
    return (
      <div className="card forecast-day col-sm-2">
        <div className="card-body">
          <div className="card-title"><TimeForecast date={this.state.date}/></div>
          <Icon icon={this.state.icon} size={50} color="#a9c6fc"/>
          <p className="card-text"><TemperatureToggle temp={this.state.temperature}/></p>
        </div>
      </div>
    );}
    else {
      return <div className="card forecast-day col-sm-2">
      <div className="card-body">
        <h5 className="card-title">Weather Loading...</h5>
      </div>
    </div>
    }
  }
}
