import React from "react";
import PaginationLink from "./PaginationLink/PaginationLink";

function PaginationLinks(props) {
  return (
    <div>
      <ul className="PaginationLinks">
        <PaginationLink
          disabled={props.disabledPrev}
          clicked={props.clickedPrev}
          name="Previous"
        />
        <PaginationLink
          disabled={props.disabledNext}
          clicked={props.clickedNext}
          name="Next"
        />
      </ul>
    </div>
  );
}

export default PaginationLinks;
