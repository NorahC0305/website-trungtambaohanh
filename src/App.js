import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./MainContent";

function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

export default App;
