import React from "react";
import "./App.scss";
import Home from "./views/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieEach from "./views/MovieEach/MovieEach";
import Header from "./components/Header/Header";
import FavouriteMovies from "./views/FavouriteMovies/FavouriteMovies";
import PageNotFound from "./views/PageNotFound/PageNotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieEach />} />
        <Route path="/favourites" element={<FavouriteMovies />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
