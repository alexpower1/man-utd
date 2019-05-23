import React from "react";
import HomeLink from "./HomeLink/HomeLink";

function HomeLinks(props) {
  return (
    <ul className="HomeLinks">
      <HomeLink name={"Fixtures"} clicked={() => props.clicked(1)} />
      <HomeLink name={"Standings"} clicked={() => props.clicked(2)} />
      <HomeLink name={"Squad"} clicked={() => props.clicked(3)} />
      <HomeLink name={"Old Trafford"} clicked={() => props.clicked(4)} />
      <HomeLink name={"About the Project"} clicked={() => props.clicked(5)} />
    </ul>
  );
}

export default HomeLinks;
