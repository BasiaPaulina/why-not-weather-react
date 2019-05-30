import React, { Component } from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";

export default class App extends Component {
  render() {
  return (
    <div className="container-fluid app-all">
        <WeatherMain cityDefault="Lisbon" />
    </div>
  );
}
}