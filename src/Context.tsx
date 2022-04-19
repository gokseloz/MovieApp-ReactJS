import React, { useContext, useState } from "react";
import useFetch from "./hooks/useFetch";

const AppContext = React.createContext<any>(null);

const AppProvider: React.FC<any> = ({ children }) => {
  const [movieName, setMovieName] = useState("lord");
  const { isLoading, error, data: movies } = useFetch(`&s=${movieName}&page=1`);
  const [isAddedToFavourites, setIsAddedToFavourites] = useState(false);

  const [favouriteMovies, setFavouriteMovies] = useState(
    JSON.parse(localStorage.getItem("favouriteMovies") || JSON.stringify([]))
  );

  const saveMoviesToStorage = (movie: IFavouriteMovie[] | null) => {
    localStorage.setItem("favouriteMovies", JSON.stringify(movie));
  };

  const removeMovieToFavourites = (imdbID: string) => {
    const storedMovies = JSON.parse(
      localStorage.getItem("favouriteMovies") || ""
    );

    const remainedMovies = storedMovies.filter(
      (el: SingleMovie) => el.imdbID !== imdbID
    );
    saveMoviesToStorage(remainedMovies);
    setFavouriteMovies(remainedMovies);
  };

  const addMovieToFavourites = (
    imdbID: string,
    Poster: string,
    Released: string,
    Title: string
  ) => {
    setIsAddedToFavourites(!isAddedToFavourites);
    favouriteMovies.push({
      imdbID: imdbID,
      Poster: Poster,
      Year: Released,
      Title: Title,
    });
    saveMoviesToStorage(favouriteMovies);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        error,
        movies,
        movieName,
        setMovieName,
        addMovieToFavourites,
        removeMovieToFavourites,
        isAddedToFavourites,
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
