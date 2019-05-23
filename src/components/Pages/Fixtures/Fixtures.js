import React, { Component } from "react";
import axios from "axios";
import Fixture from "./Fixture/Fixture";
import PaginationLinks from "../../Layout/PaginationLinks/PaginationLinks";

class Fixtures extends Component {
  state = {
    fixtures: [],
    currentPage: 1,
    matchesPerPage: 8,
    error: null
  };

  // On component mount, match data for whole season is requested from the API
  componentDidMount() {
    axios
      .get("https://api.football-data.org/v2/teams/66/matches", {
        headers: {
          "X-Auth-Token": "6929c6f5c1764d03993f6531ba9d25d2",
          Accept: "application/json"
        }
      })
      .then(response => {
        // If the request is successful, the function to convert data is called
        this.convertData(response);
      })
      .catch(error => {
        // If there is an error, the message is passed to the state
        if (error) {
          this.setState({ error: error.message });
        }
      });
  }

  /*
    Required data is taken and converted into suitable format
    Once converted, the data is passed to the state
  */
  convertData = response => {
    // Create an array of matches for use in state
    let matchArray = [];

    // Loop through each match
    for (let i = 0; i < response.data.matches.length; i++) {
      let current = response.data.matches[i];
      let scoreObj = {};
      let played = true;
      let score = "";
      // If extra time score is null, use full time score
      current.score.homeTeam
        ? (scoreObj = current.score.extraTime)
        : (scoreObj = current.score.fullTime);

      // Create date string by converting UTC format
      let date = new Date(current.utcDate);

      // Check if the match has been played or is a future fixture
      if (current.status === "FINISHED") {
        // If true, create score string
        score = scoreObj.homeTeam + " - " + scoreObj.awayTeam;
      } else {
        // If false, store the game start time, rather than the score.
        let hours = date
          .getUTCHours()
          .toString()
          .padStart(2, "0");
        let minutes = date
          .getUTCMinutes()
          .toString()
          .padStart(2, "0");
        score = hours + ":" + minutes;
        played = false;
      }

      // Convert date format for display purposes
      date = date.toDateString();

      // Create an object for each match
      let match = {
        home: current.homeTeam.name,
        away: current.awayTeam.name,
        score: score,
        date: date,
        matchKey: current.id,
        played: played
      };

      // Add each match to the array
      matchArray = matchArray.concat(match);
    }
    // Update the state with the array in reverse, so that most recent fixtures are shown first
    this.setState({ fixtures: matchArray.reverse() });
  };

  // Update the page on click, if not currently on the first or last page
  prevPageClick = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };

  nextPageClick = () => {
    if (this.state.currentPage !== this.lastPage) {
      this.setState({
        currentPage: this.state.currentPage + 1
      });
    }
  };

  render() {
    // Check for request errors
    if (this.state.error) {
      return <h1>{this.state.error}</h1>;
    } else {
      // Display correct matches based on current page and specified number per page
      const indexOfLastMatch =
        this.state.currentPage * this.state.matchesPerPage;
      const indexOfFirstMatch = indexOfLastMatch - this.state.matchesPerPage;
      const currentMatches = this.state.fixtures.slice(
        indexOfFirstMatch,
        indexOfLastMatch
      );

      // Calculate the last page number
      const lastPage = Math.round(
        this.state.fixtures.length / this.state.matchesPerPage
      );

      // The array of fixtures is passed to the map function
      let fixtureList = currentMatches.map((fixture, index) => {
        return <Fixture key={fixture.matchKey} {...fixture} />;
      });

      return (
        <div className="Fixtures">
          <h1>Fixtures</h1>
          <table>{fixtureList}</table>
          <PaginationLinks
            disabledPrev={this.state.currentPage === 1}
            disabledNext={this.state.currentPage === lastPage}
            clickedPrev={this.prevPageClick}
            clickedNext={this.nextPageClick}
          />
        </div>
      );
    }
  }
}

export default Fixtures;
