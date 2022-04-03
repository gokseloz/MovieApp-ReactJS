import React from "react";
import "./SingleMovie.scss";
import { Link } from "react-router-dom";

interface ISingleMovie {
  Poster: string;
  Year: string;
  Title: string;
  imdbID: string;
}

const SingleMovie: React.FC<ISingleMovie> = (props) => {
  const { Poster, Year, Title, imdbID } = props;

  return (
    <Link to={`/movie/${imdbID}`}>
      <article className="movie">
        <figure>
          <img className="movie-img" src={Poster} alt={Title} />
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
