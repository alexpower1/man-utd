import React from "react";

function Fixture(props) {
  return (
    <tbody className="Fixture">
      <tr>
        <td />
        <td className="MatchDate">{props.date}</td>
        <td />
      </tr>
      <tr className="Fixture__Row2">
        <td
          className={
            props.home === "Manchester United FC"
              ? "HomeTeam MUText"
              : "HomeTeam"
          }
        >
          <div className="NoCellOverflow">{props.home}</div>
        </td>
        <td className={props.played ? "Centre" : "Centre FutureGame"}>
          <div className="NoCellOverflow">{props.score}</div>
        </td>
        <td
          className={
            props.away === "Manchester United FC"
              ? "AwayTeam MUText"
              : "AwayTeam"
          }
        >
          <div className="NoCellOverflow">{props.away}</div>
        </td>
      </tr>
    </tbody>
  );
}

export default Fixture;
