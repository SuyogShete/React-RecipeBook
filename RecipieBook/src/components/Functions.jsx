import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllRecipies from "./AllRecipies";

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
