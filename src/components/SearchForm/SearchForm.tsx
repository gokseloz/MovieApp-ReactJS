import React, { ReactElement } from "react";
import { useGlobalContext } from "../../Context";
import useDebounce from "../../hooks/useDebounce";
import "./SearchForm.scss";

const SearchForm = () => {
  const { movieName, setMovieName, error } = useGlobalContext();
  const debounce = useDebounce();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setMovieName(searchTerm);
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
            onChange={(e) => handleInput(e)}
          />
        </form>
        {/* {error.show && <div className="error-msg">{error.msg}</div>} */}
      </div>
    </div>
  );
};

export default SearchForm;
