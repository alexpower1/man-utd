import React from "react";

function HomeLink(props) {
  return (
    <li className="HomeLink" onClick={props.clicked}>
      {props.name}
    </li>
  );
}

export default HomeLink;
