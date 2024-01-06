import React, { useState } from "react";

import { useParams, Link } from "react-router-dom";

import MaterialIcon, { colorPalette } from "material-icons-react";

function Recipie(props) {
  const { index } = useParams();

  function handleClick() {
    props.onDelete(parseInt(index, 10));
  }

  const noteItem = props.notesArr[parseInt(index, 10)];

  return (
    <div className="Recipie">
      <h1 className="description">{noteItem.title}</h1>
      <textarea className="description" rows="16" style={{ width: "100%" }}>
        {noteItem.content}
      </textarea>
      <Link to="/*">
        <button onClick={handleClick}>
          <MaterialIcon icon="delete" size={25} color="#fff" />
        </button>
      </Link>
    </div>
  );
}

export default Recipie;
