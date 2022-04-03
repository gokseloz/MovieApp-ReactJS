import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";
import SearchForm from "../../components/SearchForm/SearchForm";

const Home = () => {
  return (
    <>
      <Header />
      <SearchForm />
      <MovieList />
    </>
  );
};

export default Home;
