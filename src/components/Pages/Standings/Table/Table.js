import React from "react";
import TableHeader from "./TableHeader/TableHeader";
import TableBody from "./TableBody/TableBody";

function Table(props) {
  return (
    <table>
      <tbody>
        <TableHeader tabletPortraitUp={props.tabletPortraitUp} />
        <TableBody
          data={props.data}
          tabletPortraitUp={props.tabletPortraitUp}
        />
      </tbody>
    </table>
  );
}

export default Table;
