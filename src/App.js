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
      <button>Temperature</button>
      <button>Percipitation</button>
      <button>Wind</button>
      <Forecast />
    </div>
  );
}

export default App;
