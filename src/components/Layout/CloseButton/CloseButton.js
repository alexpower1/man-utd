import React from "react";

function CloseButton(props) {
  return <div onClick={props.clicked} className="CloseButton" />;
}

export default CloseButton;
