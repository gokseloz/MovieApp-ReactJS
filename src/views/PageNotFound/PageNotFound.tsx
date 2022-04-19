import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.scss";

const PageNotFound = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="notFound-container">
          <h1>Page Not Found</h1>
          <Link to="/" className="goMovies-btn">
            Back to HomePage
          </Link>
        </div>
      </div>
    </main>
  );
};

export default PageNotFound;
