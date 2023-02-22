import React from "react";
import SearchLogo from "../assets/img/Search.svg";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu } from "../components";

const Search = () => {
  const { query, handleSearch } = useNewsCategoryContext();
  const { toggleSidebar, isSidebarOpen } = useMobileLayoutContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="search-container">
        <div className="search">
          <div className="search-top-container">
            <h1 className="head-1">
              My<span className="head-2">News</span>
            </h1>
            <button className="menu-icon" onClick={() => toggleSidebar()}>
              <GiHamburgerMenu />
            </button>
          </div>
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
    </>
  );
};

export default Search;
