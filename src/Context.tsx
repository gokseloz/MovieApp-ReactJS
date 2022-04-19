import React, { useContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";

const AppContext = React.createContext<any>(null);

const AppProvider: React.FC<any> = ({ children }) => {
  const [movieName, setMovieName] = useState("lord");
  const { isLoading, error, data: movies } = useFetch(`&s=${movieName}&page=1`);
  const [favouriteMovies, setFavouriteMovies] = useState(
    JSON.parse(localStorage.getItem("favouriteMovies") || JSON.stringify([]))
  );

  useEffect(() => {
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
  }, [favouriteMovies]);

  const handleFavouriteMovie = (movieProps: IFavouriteMovieProps) => {
    const [imdbID, Poster, Released, Title] = [...movieProps];

    const isInFavourite = Boolean(
      favouriteMovies.find(
        (favMov: IFavouriteMovie) => favMov.imdbID === imdbID
      )
    );
    if (isInFavourite) {
      const remainedMovies = favouriteMovies.filter(
        (el: SingleMovie) => el.imdbID !== imdbID
      );
      setFavouriteMovies(remainedMovies);
    } else {
      setFavouriteMovies([
        ...favouriteMovies,
        { imdbID: imdbID, Poster: Poster, Year: Released, Title: Title },
      ]);
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        movieName,
        setMovieName,
        handleFavouriteMovie,
        favouriteMovies,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
