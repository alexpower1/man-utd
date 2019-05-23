import React, { Component } from "react";
import axios from "axios";
import Table from "./Table/Table";

class Standings extends Component {
  state = {
    standings: [],
    tabletPortraitUp: false,
    error: null
  };

  /* 
    Before making the request, determine browser width for responsive design
    League table data is then requested from the API
  */
  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);

    axios
      .get(
        "https://api.football-data.org/v2/competitions/2021/standings?standingType=TOTAL",
        {
          headers: {
            "X-Auth-Token": "6929c6f5c1764d03993f6531ba9d25d2",
            Accept: "application/json"
          }
        }
      )
      .then(response => {
        // If successful, the data received is passed to the state as an array
        this.setState({ standings: response.data.standings[0].table });
      })
      .catch(error => {
        if (error.response) {
          // If there is an error, the message is passed to the state
          this.setState({ error: error.message });
        }
      });
  }

  updatePredicate = () => {
    this.setState({ tabletPortraitUp: window.innerWidth > 600 });
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  render() {
    // Check for request errors
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    } else {
      return (
        <div className="Standings">
          <h1>Standings</h1>
          <Table
            data={this.state.standings}
            tabletPortraitUp={this.state.tabletPortraitUp}
          />
        </div>
      );
    }
  }
}

export default Standings;
