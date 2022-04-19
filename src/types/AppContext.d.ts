import { Dispatch, SetStateAction } from "react";

interface AppContextInterface {
  isLoading: boolean;
  error: { show: boolean; msg: string };
  movies: SingleMovie | MovieDetails | undefined;
  movieName: string;
  setMovieName: Dispatch<SetStateAction<string>>;
  addMovieToFavourites: (
    imdbID: string,
    Poster: string,
    Released: string,
    Title: string
  ) => void;
  removeMovieToFavourites: (imdbID: string) => void;
  isAddedToFavourites: boolean;
  favouriteMovies: SingleMovie;
}
