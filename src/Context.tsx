import React, { useContext, useState } from "react";
import useFetch from "./hooks/useFetch";
// import mockMovie from "./mockMovie.json";

const AppContext = React.createContext<any>(null);

const AppProvider: React.FC<any> = ({ children }) => {
  const [movieName, setMovieName] = useState("lord");
  const { isLoading, error, data: movies } = useFetch(`&s=${movieName}&page=1`);
  const [isAddedToFavourites, setIsAddedToFavourites] =
    useState<boolean>(false);

  const defaultMovie = JSON.stringify([]);
  const [favouriteMovies, setFavouriteMovies] = useState(
    JSON.parse(localStorage.getItem("favouriteMovies") || defaultMovie)
  );

  const removeMovieToFavourites = (imdbID: string) => {
    const storedMovies = JSON.parse(
      localStorage.getItem("favouriteMovies") || ""
    ).filter((el: SingleMovie) => el.imdbID !== imdbID);
    localStorage.setItem("favouriteMovies", JSON.stringify(storedMovies));
    setFavouriteMovies(
      JSON.parse(localStorage.getItem("favouriteMovies") || "")
    );
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
    localStorage.setItem("favouriteMovies", JSON.stringify(favouriteMovies));
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
