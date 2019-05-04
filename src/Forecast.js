import React, { Component } from "react";
import "./Forecast.css";

export default class Forecast extends Component {
  render() {
    return (
      <div className="card forecast-day col-sm-2">
        <div className="card-body">
          <h5 className="card-title">Day</h5>
          <img src="" alt="Weather Description" />
          <p className="card-text">Temp °C | °F</p>
        </div>
      </div>
    );
  }
}
