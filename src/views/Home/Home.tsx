import React from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  return (
    <>
      <Header />
      <MovieList />
    </>
  );
};

export default Home;
