import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
  }

  _handleChange(event) {
    this.setState({ value: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.updateForm(this.state.value);
  }

  render() {
    return (
      <div>
        <div className="search-all form-row container">
          <div className="col-sm-9">
            <form onSubmit={event => this._handleSubmit(event)}>
            <input type="text" className="form-control" placeholder="City" value={this.state.value} onChange={event => this._handleChange(event)} />
          </form></div>
          <div class="col-sm-3">
            <form>
            <input type="date" className="form-control" />
            </form>
          </div>
        </div></div>
    );
  }
}
