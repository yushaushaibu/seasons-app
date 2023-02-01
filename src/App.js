import React, { Component } from "react";

class App extends Component {
  state = { lat: null };
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude })
      },
      (err) => console.log(err)
    );
    return <div>Latitude: {this.state.lat}</div>;
  }
}

export default App;
