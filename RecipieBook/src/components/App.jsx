import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllRecipies from "./AllRecipies";

function App() {
  return (
    <div>
      <Routes>
        <Route path="*" element={<AllRecipies />} />
      </Routes>
    </div>
  );
}

export default App;
