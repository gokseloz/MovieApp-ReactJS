import { Link } from "react-router-dom";
import "./Header.scss";
import { MovieIcon, StarIcon } from "../iconComponents/iconComponent";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/">
            <span className="app-logo">
              <MovieIcon aria-label="home page" />
            </span>
          </Link>
          <Link to="/favourites">
            <span className="favourite-movies-btn">Favourite Movies</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
