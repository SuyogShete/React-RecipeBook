import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateArea from "./components/CreateArea";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
