import React from "react";
import "./App.scss";
import Home from "./views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieEach from "./views/MovieEach/MovieEach";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieEach />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
