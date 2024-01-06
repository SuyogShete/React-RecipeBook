import React, { useState } from "react";
import MaterialIcon, { colorPalette } from "material-icons-react";

import Footer from "./Footer";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.getIMG(note.title);
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    alert("Recipie added successfully");
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Recipe Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Description . . ."
          rows="18"
        />
        <button onClick={submitNote}>
          <MaterialIcon icon="add" size={25} color="#fff" />
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default CreateArea;
