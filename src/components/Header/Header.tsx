import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-container">
          <Link to="/">
            <span className="app-logo">Movie App</span>
          </Link>
          <Link to="/favourites">
            <span className="app-logo">Favourite Movies</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;