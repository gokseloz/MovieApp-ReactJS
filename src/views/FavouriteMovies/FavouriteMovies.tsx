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
            {favouriteMovies.map((movie: SingleMovie, idx: string) => (
              <SingleMovie key={idx} {...movie} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default FavouriteMovies;
