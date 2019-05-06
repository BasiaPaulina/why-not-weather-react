import React from "react";
import "./App.css";
import WeatherMain from "./WeatherMain.js";
import Forecast from "./Forecast.js";
import Search from "./Search.js";

function App() {
  return (
    <div className="app-all">
      <div>
        <WeatherMain />
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
