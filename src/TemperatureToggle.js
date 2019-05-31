import React, { Component } from "react";

export default class TemperatureToggle extends Component {
    constructor(props){
        super(props);
        this.state = {
          temperature: props.temp,
          units: "metrics"
        };
    }

    toggle = () => {
      if (this.state.units === "metrics") {
        this.setState({
          temperature: Math.round(this.props.temp * (9 / 5) + 32),
          units: "imperial"
        });
      } else {
        this.setState({
          temperature: this.props.temp,
          units: "metrics"
        });
      }
    };
    render() {
      if (this.state.units === "metrics") {
        return (
          <p>
            {this.state.temperature}°C |{" "}
            <a href="#" onClick={this.toggle}>
              °F
            </a>
          </p>
        );
      } else {
        return (
          <p>
            {this.state.temperature}°F |{" "}
            <a href="#" onClick={this.toggle}>
              °C
            </a>
          </p>
        );
      }
    }
}