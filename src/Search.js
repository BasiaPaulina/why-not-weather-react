import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: ""
    };
  }

 onChange(event) {
    this.setState({ value: event.target.value });
  }

 onSubmit(event) {
    event.preventDefault();
    this.props.updateForm(this.state.value);
  }

  onChangeDate(event){
    this.setState({ date: event.target.value });
  }

  onSubmitDate(event){
    event.preventDefault();
    this.props.updateDate(this.state.date);
  }
  render() {
    return (
        <div className="search-all form-row container">
          <div className="col-sm-12">
            <form onSubmit={event => this.onSubmit(event)}>
            <input type="text" className="form-control" placeholder="City" value={this.state.value} onChange={event => this.onChange(event)} />
          </form></div>
        </div>
    );
  }
}
