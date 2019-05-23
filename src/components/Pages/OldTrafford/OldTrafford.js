import React, { Component } from "react";
import Spinner from "../../Layout/Spinner/Spinner";

class OldTrafford extends Component {
  state = {
    latitude: null,
    longitude: null,
    distance: "00.00KM",
    errorMessage: "",
    calculated: false
  };

  componentDidMount() {
    // On mount, use Geolocate API to determine user position
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        }),
      err =>
        this.setState({
          distance: "",
          errorMessage:
            "Error: " +
            err.message +
            ". Make sure you have provided access to your location."
        })
    );
  }

  calculateDistance = () => {
    console.log(this.state);
    // Set Old Trafford position
    const OTLAT = 53.4631;
    const OTLON = -2.2913;

    let deg2rad = deg => {
      return deg * (Math.PI / 180);
    };
    const R = 6371; // Radius of the earth in km

    let dLat = deg2rad(OTLAT - this.state.latitude);
    let dLon = deg2rad(OTLON - this.state.longitude);

    let a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(this.state.latitude)) *
        Math.cos(deg2rad(OTLAT)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    let d = R * c; // Distance in km
    let e = Math.round(d * 100) / 100;

    this.setState({ distance: e + "km", calculated: true });
  };

  render() {
    let button = "";
    if (this.state.errorMessage === "") {
      if (this.state.latitude) {
        button = (
          <button
            onClick={this.calculateDistance}
            disabled={this.state.calculated}
          >
            Calculate
          </button>
        );
      } else {
        button = <Spinner />;
      }
    } else {
      button = (
        <p>
          <strong>{this.state.errorMessage}</strong>
        </p>
      );
    }
    return (
      <div className="OldTrafford">
        <h1>Old Trafford</h1>
        <p>Calculate your distance from Manchester United's stadium.</p>
        <div className="OldTraffordCalc">{button}</div>
        <h1>{this.state.distance}</h1>
      </div>
    );
  }
}

export default OldTrafford;
