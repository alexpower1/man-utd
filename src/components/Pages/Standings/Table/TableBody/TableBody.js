import React from "react";

function TableBody(props) {
  return props.data.map(team => {
    return (
      <tr key={team.team.name}>
        <td>
          <strong>{team.position}</strong>
        </td>
        <td>
          <strong
            className={
              team.team.name === "Manchester United FC" ? "MUText" : null
            }
          >
            {team.team.name}
          </strong>
        </td>
        <td>{team.playedGames}</td>
        <td>{team.won}</td>
        <td>{team.draw}</td>
        <td>{team.lost}</td>
        {props.tabletPortraitUp ? (
          <>
            <td>{team.goalsFor}</td>
            <td>{team.goalsAgainst}</td>
          </>
        ) : null}

        <td>{team.goalDifference}</td>
        <td>{team.points}</td>
      </tr>
    );
  });
}

export default TableBody;
