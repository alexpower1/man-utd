import React from "react";

function PaginationLink(props) {
  return (
    <button
      disabled={props.disabled}
      className="PaginationLink"
      onClick={props.clicked}
    >
      {props.name}
    </button>
  );
}

export default PaginationLink;
