import React from "react";
import { useGlobalContext } from "../../Context";
import "./MovieList.scss";
import SingleMovie from "../SingleMovie/SingleMovie";

const MovieList = () => {
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    // pure css loader => go to App.scss for css codes
    return (
      <div className="container">
        <div className="loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main>
      <div className="container">
        <div className="movieList-container">
          {movies.map((movie: SingleMovie, idx: string) => (
            <SingleMovie key={idx} {...movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MovieList;
