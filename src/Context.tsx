import React, { useContext, useState } from "react";
import useFetch from "./hooks/useFetch";
// import mockMovie from "./mockMovie.json";

const AppContext = React.createContext<any>(null);

const AppProvider: React.FC<any> = ({ children }) => {
  const [movieName, setMovieName] = useState("lord");
  const { isLoading, error, data: movies } = useFetch(`&s=${movieName}&page=1`);

  return (
    <AppContext.Provider
      value={{ isLoading, error, movies, movieName, setMovieName }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
