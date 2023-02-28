import React, { SyntheticEvent } from "react";
import SearchLogo from "../assets/img/Search.svg";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import Close from "../assets/img/Close.svg";
import Menu from "../assets/img/Menu.svg";

const Search = () => {
  const {
    state: { query },
    handleSearch,
  } = useNewsCategoryContext();
  const {
    toggleSidebar,
    state: { isSidebarOpen },
  } = useMobileLayoutContext();

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
  };

  return (
    <section className="search-container">
      <div className="search">
        <div className={isSidebarOpen ? "top-container-menu" : "top-container"}>
          <h1 className={isSidebarOpen ? "head head-bg" : "head"}>
            My<span className="head-sub">News</span>
          </h1>
          <button className="menu-icon" onClick={() => toggleSidebar()}>
            {isSidebarOpen ? (
              <img src={Close} alt="x" />
            ) : (
              <img src={Menu} alt="menu" />
            )}
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
  );
};

export default Search;
