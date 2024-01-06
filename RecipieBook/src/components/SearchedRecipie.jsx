import React, { useState } from "react";

import Note from "./Note";

import { useParams } from "react-router-dom";

function SearchedRecipie(props) {
  const { title } = useParams();

  return (
    <div>
      {props.notesArr.map((noteItem, index) => {
        return (
          noteItem.title.includes(title) && (
            <div key={index}>
              <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                URL={props.imgArr[index]}
                notesArr={props.notesArr}
              />
            </div>
          )
        );
      })}
    </div>
  );
}

export default SearchedRecipie;
