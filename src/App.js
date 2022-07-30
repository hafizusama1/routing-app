import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Careers from "./components/Careers";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Home} />
        <Route index element={<Careers />}>
          <Route index element=""></Route>
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/" element={Home} />
        <Route path="/" element={Home} />
      </Routes>
    </div>
  );
}

export default App;
