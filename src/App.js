import React, { Component } from "react";

class App extends Component {
  state = { lat: null, errorMsg: "" };
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMsg: err.message });
      }
    );
    
    if (!this.state.lat && this.state.errorMsg) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (this.state.lat && !this.state.errorMsg) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading..</div>;
  }
}

export default App;
