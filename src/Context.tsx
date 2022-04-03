import React, { useContext, useState, useEffect } from "react";
import movieApi from "./api/movieApi";
import useFetch from "./useFetch";
// import mockMovie from "./mockMovie.json";

const AppContext = React.createContext<any>(null);
const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const AppProvider: React.FC<any> = ({ children }) => {
  const [movieName, setMovieName] = useState("lord");
  const { isLoading, error, movie } = useFetch(`&s=${movieName}`);

  return (
    <AppContext.Provider value={{ isLoading, error, movie }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
