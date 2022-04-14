/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import movieApi from "../api/movieApi";
import useDebounce from "./useDebounce";

const apiKey = process.env.REACT_APP_MOVIE_API_KEY;

const useFetch = (urlParams: string) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState<MovieDetails | SingleMovie>();

  const debounce = useDebounce();

  const fetchMovies = async () => {
    setIsLoading(true);
    try {
      const response: any = await movieApi.get(`?apikey=${apiKey}${urlParams}`);
      console.log(response);
      if (response.data.Response === "True") {
        setData(response.data.Search || response.data);
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
    debounce(fetchMovies, 500);
  }, [urlParams]);

  return { isLoading, error, data };
};

export default useFetch;
