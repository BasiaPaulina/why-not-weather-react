import React from "react";
import "./App.css";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div>
      <h1>City</h1>
      <p>Day time</p>
      <p>Description</p>
      <img src="" alt="work in progress.." />
      <p>Temp</p>
      <ul>
        <li>Percipition: %</li>
        <li>Humidity: %</li>
        <li>Wind: km/h</li>
      </ul>
      <div className="container">
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

export default App;
