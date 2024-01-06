import React, { useState } from "react";
import Header from "./Header";

import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";
import { useLocation, Routes, Route } from "react-router-dom";
import Recipie from "./Recipie";
import SearchedRecipies from "./SearchedRecipie";

function AllRecipies() {
  const location = useLocation();

  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

    getImg((prevIMG) => {
      return prevIMG.filter((imgItem, index) => {
        return index !== id;
      });
    });
  }

  const [img, getImg] = useState([]);

  function imgURL(title) {
    if (title === "") title = "question mark";

    const clientId = "R_773F6zUENb-BcUTJITY_8LfJLKl307SX1pX-BSNHo";

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      title +
      "&client_id=" +
      clientId;

    Axios.get(url).then((response) => {
      getImg((prevIMG) => {
        return [...prevIMG, response.data.results[0].urls.small];
      });
    });
  }

  return (
    <div>
      <Header />

      <Routes>
        <Route
          path="/createRecipie"
          element={<CreateArea onAdd={addNote} getIMG={imgURL} />}
        />
        <Route
          path="/recipie/:index"
          element={<Recipie notesArr={notes} onDelete={deleteNote} />}
        />
        <Route
          path="/search/:title"
          element={<SearchedRecipies notesArr={notes} imgArr={img} />}
        />
      </Routes>

      {location.pathname === "/*" ? (
        notes.length > 0 ? (
          <p className="description">Click to see description</p>
        ) : (
          <p className="description">No recipies added yet</p>
        )
      ) : null}

      {location.pathname === "/*" &&
        notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              URL={img[index]}
              notesArr={notes}
            />
          );
        })}
    </div>
  );
}

export default AllRecipies;
