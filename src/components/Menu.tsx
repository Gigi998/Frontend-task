import React from "react";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";
import { Sidebar, Search } from "../components";

const Menu = () => {
  const { isSidebarOpen } = useMobileLayoutContext();

  return (
    <div
      className={isSidebarOpen ? "menu-sidebar active-sidebar" : "menu-sidebar"}
    >
      <Search />
      <Sidebar />
    </div>
  );
};

export default Menu;
