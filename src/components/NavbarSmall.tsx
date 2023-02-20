import React from "react";
import { NavLink } from "react-router-dom";

const NavbarSmall = () => {
  return (
    <div className="nav-small">
      <NavLink
        to="featured"
        className={({ isActive }) => (isActive ? "nav-active" : "nav")}
        children={({ isActive }) => {
          return (
            <>
              <button className={isActive ? "small-link active" : "small-link"}>
                Featured
              </button>
            </>
          );
        }}
      />
      <NavLink
        to="latest"
        className={({ isActive }) => (isActive ? "nav-active" : "nav")}
        children={({ isActive }) => {
          return (
            <button className={isActive ? "small-link active" : "small-link"}>
              Latest
            </button>
          );
        }}
      />
    </div>
  );
};

export default NavbarSmall;
