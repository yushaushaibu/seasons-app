import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  showContent() {
    if (!this.state.lat && this.state.errorMsg) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Awaiting location request permission" />;
  }

  render() {
    return <div>{this.showContent()}</div>;
  }
}

export default App;
