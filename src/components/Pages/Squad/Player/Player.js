import React from "react";

function Player(props) {
  const images = require.context("../../../../assets/img/", true);
  return (
    <div className="Player">
      <div className="PlayerImage">
        <img
          src={
            images(`./${props.image}`)
              ? images(`./${props.image}`)
              : images(`./anon.png`)
          }
          alt={props.name}
        />
      </div>
      <div className="PlayerInfo">
        <h3>{props.name}</h3>
        <h3>{props.position ? props.position : props.role}</h3>
        <h3>{props.nationality}</h3>
      </div>
    </div>
  );
}

export default Player;
