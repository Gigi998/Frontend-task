import React from "react";
import SearchLogo from "../assets/img/Search.svg";

const Search = () => {
  return (
    <section className="search-container">
      <div className="search">
        <h1 className="head-1">
          My<span className="head-2">News</span>
        </h1>
        <form className="form-container">
          <img className="img" src={SearchLogo} alt="Search logo" />
          <input type="text" placeholder="Search news" className="input" />
          <button className="btn btn-search">Search</button>
        </form>
      </div>
      <hr className="hr-line" />
    </section>
  );
};

export default Search;
