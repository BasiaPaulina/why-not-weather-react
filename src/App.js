import React from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";
import axios from "axios";
import Api from "./Api.js";

function App() {
  return (
    <div className="container-fluid app-all">
      <div>
        <WeatherMain city = ""/>
        <div>
          <Search />
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

export default App;
