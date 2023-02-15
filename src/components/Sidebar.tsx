import React, { useState } from "react";
import navLinks from "../helpers/navLinks";
import { NavLink } from "react-router-dom";
import { useNewsCategoryContext } from "../context/newsCategoryContext";

const Sidebar = () => {
  const { setCategory } = useNewsCategoryContext();
  return (
    <div className="sidebar">
      {navLinks.map((link) => {
        const { id, text, path, svg, svgR } = link;
        return (
          <NavLink
            key={id}
            to={path}
            onClick={() => setCategory(path)}
            className={({ isActive }) => (isActive ? "link active" : "link")}
            children={({ isActive }) => {
              return (
                <>
                  <img src={isActive ? svgR : svg} alt={text} />
                  {text}
                </>
              );
            }}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;
