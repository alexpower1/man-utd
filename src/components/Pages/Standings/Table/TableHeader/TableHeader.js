import React from "react";

function TableHeader(props) {
  return (
    <tr>
      <th />
      <th>Team</th>
      <th>P</th>
      <th>W</th>
      <th>D</th>
      <th>L</th>
      {props.tabletPortraitUp ? (
        <>
          <th>GF</th>
          <th>GA</th>
        </>
      ) : null}
      <th>GD</th>
      <th>Points</th>
    </tr>
  );
}

export default TableHeader;
