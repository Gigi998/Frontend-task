import React from "react";
import { Link } from "react-router-dom";
import navLinks from "../helpers/navLinks";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {navLinks.map((link) => {
        const { id, text, path, svg } = link;
        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) => (isActive ? "link active" : "link")}
          >
            <img src={svg} alt={text} className="active" />
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Sidebar;
