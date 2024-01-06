import React, { useState } from "react";
import { Link } from "react-router-dom";

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <Link to={`/recipie/${props.id}`}>
        <img src={props.URL} alt="Unsplash" />
      </Link>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Note;
