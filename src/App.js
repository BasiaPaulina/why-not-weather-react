import React, { Component } from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";

export default class App extends Component {
refresh() {
  return "Lisbon";
}
  render() {
  return (
    <div className="container-fluid app-all">
      <div>
        <WeatherMain city = "Lisbon"/>
        <div>
          <Search updateForm={this.refresh}/>
        </div>
      </div>
      <div className="container app-forecast">
        <div className="row">
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
          <Forecast />
        </div>
      </div>
    </div>
  );
}
}