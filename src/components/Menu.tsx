import React from "react";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import { Sidebar } from "../components";

const Menu = () => {
  const { isSidebarOpen, toggleSidebar } = useMobileLayoutContext();

  return (
    <div
      className={isSidebarOpen ? "menu-sidebar active-sidebar" : "menu-sidebar"}
    >
      <h1 className="head-1">
        My<span className="head-2">News</span>
      </h1>{" "}
      <form className="form-container">
        <input type="text" placeholder="Search news" className="input" />
      </form>
      <Sidebar />
      <button className="btn" onClick={() => toggleSidebar()}>
        Close
      </button>
    </div>
  );
};

export default Menu;
