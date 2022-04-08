import React from "react";
import "./Home.scss";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

const Home = () => {
  return (
    <>
      <SearchForm />
      <MovieList />
    </>
  );
};

export default Home;
