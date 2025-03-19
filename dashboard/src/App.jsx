import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import TopBar from "./components/TopBar";
import Funds from "./components/Funds";
import Holdings from "./components/Holding";


function App() {

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    
  );  
}

export default App
