import React from "react";
import SearchLogo from "../assets/img/Search.svg";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const Search = () => {
  const { query, handleSearch } = useNewsCategoryContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="search-container">
      <div className="search">
        <h1 className="head-1">
          My<span className="head-2">News</span>
        </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <img className="img" src={SearchLogo} alt="Search logo" />
          <input
            type="text"
            placeholder="Search news"
            className="input"
            onChange={(e) => handleSearch(e.target.value)}
            value={query}
          />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <hr className="hr-line" />
    </section>
  );
};

export default Search;
