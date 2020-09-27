import React, { Component } from "react";
import DetermineSeason from "./DetermineSeason";
import Spinner from "./Spinner";

export default class SeasonDisplay extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { lat: null, err: "" };
  // }
  state = { lat: null, err: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position.coords.latitude);
        this.setState({ lat: position.coords.latitude });
      },
      (error) => {
        // console.log(error.message);
        this.setState({ err: error.message });
      }
    );
  }
  render() {
    if (this.state.lat && !this.state.err) {
      return <DetermineSeason lat={this.state.lat} />;
    }
    if (this.state.err && !this.state.lat) {
      return (
        <div>
          <h1>Error : {this.state.err}</h1>
        </div>
      );
    }
    return <Spinner message="Please accept the request" />;
  }
}
