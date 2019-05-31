import React, { Component } from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";

export default class App extends Component {
  render() {
  return (
    <div className="container-fluid app-all">
        <WeatherMain />
    </div>
  );
}
}