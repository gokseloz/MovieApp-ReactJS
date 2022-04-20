import React from "react";
import SingleMovie from "../../components/SingleMovie/SingleMovie";
import { useGlobalContext } from "../../Context";
import "./FavouriteMovies.scss";

const FavouriteMovies = () => {
  const { favouriteMovies } = useGlobalContext();

  return (
    <>
      <div className="container">
        <h2 className="favourite-title">Favourite Movies</h2>
      </div>
      <main>
        <div className="container">
          <div className="favouriteMovie-container">
            {favouriteMovies.length > 0 ? (
              favouriteMovies.map((movie: SingleMovie, idx: string) => (
                <SingleMovie key={idx} {...movie} />
              ))
            ) : (
              <h1>No Movie Selected</h1>
            )}
            {}
          </div>
        </div>
      </main>
    </>
  );
};

export default FavouriteMovies;
