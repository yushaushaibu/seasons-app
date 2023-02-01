import React, { Component } from "react";

class App extends Component {
  state = { lat: null }  
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );
    return <div>Latitude: </div>;
  }
}

export default App;
