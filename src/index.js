import React from "react";
import ReactDOM from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

// FUNCTIONAL COMPONENT
// const App  = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>Latitude: </div>
// }

// CLASS COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);

    //INITIALISES STATE
    this.state = { lat: null, errorMessage: "" };
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        // UPDATES THE STATE
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
      }
    );
  }

  // NORMAL RENDERING
  // render() {
  //      return (
  //         <h1>
  //         Latitude: {this.state.lat}
  //         <br />
  //         Message: {this.state.errorMessage}
  //         </h1>
  //     )
  // }

contentsToRender() {
  //conditional render
  if (this.state.errorMessage && !this.state.lat) {
    return <div>Error: {this.state.errorMessage}</div>;
  }

  if (!this.state.errorMessage && this.state.lat) {
    return <SeasonDisplay lat={this.state.lat} />;
  }

  return <Spinner message="Please accept location request"/>;
}


  render() {
    return (
      <div>
         {this.contentsToRender()}
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
