import React from "react";
import "./SingleMovie.scss";
import { Link } from "react-router-dom";

const notFoundImg =
  "https://user-images.githubusercontent.com/72968539/161445143-18bed688-a4d4-4537-b3c0-4f2031dbefb8.jpg";

const SingleMovie: React.FC<SingleMovie> = (props) => {
  const { Poster, Year, Title, imdbID } = props;

  return (
    <Link to={`/movie/${imdbID}`}>
      <article className="movie">
        <figure>
          <img
            className="movie-img"
            src={Poster === "N/A" ? notFoundImg : Poster}
            alt={Title}
          />
          <figcaption className="movie-caption">
            {Title}
            <p>{Year}</p>
          </figcaption>
        </figure>
      </article>
    </Link>
  );
};

export default SingleMovie;
