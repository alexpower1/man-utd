import React, { Component } from "react";
import axios from "axios";
import Player from "./Player/Player";
import PaginationLinks from "../../Layout/PaginationLinks/PaginationLinks";
import additionalPlayerData from "../../../assets/data/data";

class Squad extends Component {
  state = {
    squad: [],
    error: null,
    currentPage: 1,
    playersPerPage: 6
  };

  componentDidMount() {
    axios
      .get("https://api.football-data.org/v2/teams/66", {
        headers: {
          "X-Auth-Token": "6929c6f5c1764d03993f6531ba9d25d2",
          Accept: "application/json"
        }
      })
      .then(response => {
        this.setState({ squad: response.data.squad });
        console.log(response.data.squad);
      })
      .catch(error => {
        if (error.response) {
          // If there is an error, the message is passed to the state
          this.setState({ error: error.message });
        }
      });
  }

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
    // Display correct matches based on current page and specified number per page
    const indexOfLastPlayer =
      this.state.currentPage * this.state.playersPerPage;
    const indexOfFirstPlayer = indexOfLastPlayer - this.state.playersPerPage;
    const currentPlayers = this.state.squad.slice(
      indexOfFirstPlayer,
      indexOfLastPlayer
    );

    // Calculate the last page number
    const lastPage = Math.round(
      this.state.squad.length / this.state.playersPerPage
    );

    let playerList = currentPlayers.map((player, index) => {
      let playerImage = "";
      for (let i = 0; i < additionalPlayerData.length; i++) {
        if (player.id === additionalPlayerData[i].id) {
          playerImage = additionalPlayerData[i].image;
        }
      }
      return (
        <Player
          key={player.id}
          image={playerImage !== "" ? playerImage : "anon.png"}
          {...player}
        />
      );
    });

    return (
      <div>
        <h1>Squad</h1>
        {playerList}
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

export default Squad;
