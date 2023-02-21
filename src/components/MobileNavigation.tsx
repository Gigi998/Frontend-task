import React from "react";

const MobileNavigation = ({ handleClick }) => {
  return (
    <div className="nav-small">
      <button className="btn-m active" onClick={() => handleClick("featured")}>
        Featured
      </button>
      <button className="btn-m" onClick={() => handleClick("latest")}>
        Latest
      </button>
    </div>
  );
};

export default MobileNavigation;
