import React from "react";
import { useGlobalContext } from "../../Context";
import "./SearchForm.scss";

const SearchForm = () => {
  const { movieName, setMovieName, error } = useGlobalContext();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div className="container">
      <div className="searchForm-container">
        <form className="searchForm" onSubmit={(e) => handleSubmit(e)}>
          <h2>Search Movies</h2>
          <input
            type="text"
            className="searchForm-input"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </form>
        {error.show && <div className="error-msg">{error.msg}</div>}
      </div>
    </div>
  );
};

export default SearchForm;
