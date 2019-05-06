import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  render() {
    return (
      <form>
        <div className="search-all form-row container">
          <div className="col-sm-9">
            <input type="text" className="form-control" placeholder="City" />
          </div>
          <div class="col-sm-3">
            <input type="date" className="form-control" />
          </div>
        </div>
      </form>
    );
  }
}
