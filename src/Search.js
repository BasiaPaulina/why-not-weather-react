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
    event.preventDefault();
    this.setState({ value: event.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <form>
        <div className="search-all form-row container">
          <div className="col-sm-9">
            <form>
            <input type="text" className="form-control" placeholder="City" onSubmit={event => this._handleChange(event)}/>
            </form>
          </div>
          <div class="col-sm-3">
            <input type="date" className="form-control" />
          </div>
        </div>
      </form>
    );
  }
}
