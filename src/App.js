import React from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";
import Forecast from "./Forecast.js";

function App() {
  return (
    <div className="jumbotron app-main-card">
      <div>
        <WeatherMain />
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

export default App;
