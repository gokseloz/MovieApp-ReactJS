import "./MovieDetail.scss";
import { Link, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { StarIcon } from "../iconComponents/iconComponent";
import { TomatoIcon } from "../iconComponents/iconComponent";
import { useGlobalContext } from "../../Context";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${imdbID}`);
  const { handleFavouriteMovie, favouriteMovies } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }

  if (error.show) {
    return (
      <div className="container">
        <div className="error-page">
          <h1>{error.msg}</h1>
          <Link to="/" className="backMovies-btn">
            back to movies
          </Link>
        </div>
      </div>
    );
  }
  const {
    Director,
    Title,
    Runtime,
    Released,
    Genre,
    Actors,
    Awards,
    Language,
    Plot,
    Poster,
    Ratings,
    Rated,
    Writer,
  } = movie as MovieDetails;

  const movieProps = [imdbID, Poster, Released, Title];

  const isInFavourite = favouriteMovies.find(
    (favMov: IFavouriteMovie) => favMov.imdbID === imdbID
  );

  const renderedRating = Ratings.map((rating, idx) => {
    let icon;
    if (rating.Source.toLowerCase().includes("database")) {
      icon = <StarIcon />;
    }
    if (rating.Source.toLowerCase().includes("tomatoes")) {
      icon = <TomatoIcon />;
    }
    if (rating.Source.toLowerCase().includes("metacritic")) {
      icon = (
        <b className="rating-mc" aria-label="meta critic">
          {Ratings[2].Value.split("/")[0]}
        </b>
      );
    }

    return (
      <li className="rating" key={idx}>
        <span>
          {rating.Source} : {rating.Value}
        </span>
        {icon}
      </li>
    );
  });

  return (
    <main className="main">
      <div className="container">
        <div className="movie-container">
          <section className="movie-info-section" aria-labelledby="movie-title">
            <header>
              <h3 id="movie-title" className="movie-title">
                {Title}
              </h3>
              <div className="movie-firstImpression">
                <ul className="movie-shortInfo">
                  <li>{Released.split(" ")[2]}</li>
                  <span className="divider"></span>
                  <li>{Rated === "N/A" ? "No Rated" : Rated}</li>
                  <span className="divider"></span>
                  <li>{Runtime}</li>
                </ul>

                <ul className="movie-ratings">{renderedRating}</ul>
              </div>
            </header>
            <p className="movie-description">{Plot}</p>
            <div className="movie-general-info">
              <div className="eachInfo">
                <span className="title">Genres</span>
                <span className="desc">{Genre}</span>
              </div>
              <div className="eachInfo">
                <span className="title">Actors</span>
                <span className="desc">{Actors}</span>
              </div>

              <div className="eachInfo">
                <span className="title">Languages</span>
                <span className="desc">{Language}</span>
              </div>
              <div className="eachInfo">
                <span className="title">Director</span>
                <span className="desc">{Director}</span>
              </div>
              <div className="eachInfo">
                <span className="title">Writers</span>
                <span className="desc">{Writer}</span>
              </div>
              <div className="eachInfo">
                <span className="title">Awards</span>
                <span className="desc">
                  {Awards === "N/A" ? "Not Found" : Awards}
                </span>
              </div>
            </div>
            <div className="btns">
              <Link to="/" className="goMovies-btn">
                Back to movies
              </Link>

              <button
                className="addToFavourites-btn"
                onClick={() => handleFavouriteMovie(movieProps)}
              >
                {isInFavourite ? "Remove from Favourites" : "Add to Favourites"}
              </button>
            </div>
          </section>
          <section className="movie-poster-section">
            <img src={Poster} alt="" />
          </section>
        </div>
      </div>
    </main>
  );
};

export default MovieDetail;
