import React from "react";
import SearchLogo from "../assets/img/Search.svg";

const Search = () => {
  return (
    <section className="search">
      <h1 className="header">
        My<span>News</span>
      </h1>
      <form className="search-container">
        <img
          className="img"
          src={SearchLogo}
          alt="Search logo"
          style={{ fill: "white" }}
        />
        <input type="text" placeholder="Search news" className="input" />
        <button className="btn btn-search">Search</button>
      </form>
    </section>
  );
};

export default Search;
