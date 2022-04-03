import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import movieApi from "./api/movieApi";

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [movie, setMovie] = useState<MovieDetails | SingleMovie>();

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response: any = await movieApi.get(`?apikey=${apiKey}${urlParams}`);
      console.log(response);
      if (response.data.Response === "True") {
        setMovie(response.data.Search || response.data);
        setError({ show: false, msg: "" });
      } else {
        setError({ show: true, msg: response.data.Error });
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [urlParams]);

  return { isLoading, error, movie };
};

export default useFetch;
