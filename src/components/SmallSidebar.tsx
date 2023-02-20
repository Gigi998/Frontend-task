import React from "react";
import { GiH2O } from "react-icons/gi";
import { useNewsCategoryContext } from "../context/newsCategoryContext";
import Sidebar from "./Sidebar";

const SmallSidebar = () => {
  const { sidebarOpen } = useNewsCategoryContext();

  return (
    <div
      className={
        sidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
      }
    ></div>
  );
};

export default SmallSidebar;
