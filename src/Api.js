import React, { Component } from "react";

export default class Api extends Component {
  render() {
    let url = "http://samples.openweathermap.org/data/2.5";
    let path = "weather";
    let apiKey = "ace2c200d6c61096c76082a9e2846e29";
    let city = "Lisbon";
    let units = "metric";
    let paths = `?q=${city}&appid=${apiKey}&units=${units}`;
    return `${url}/${path}${paths}`;
  }
}
