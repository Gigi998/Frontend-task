import React from "react";
import { useMobileLayoutContext } from "../context/mobileLayoutContext";

const MobileNavigation = () => {
  const { toggleActiveComp, activeComp } = useMobileLayoutContext();

  return (
    <div className="nav-small">
      <button
        className={activeComp === "featured" ? "btn-m active" : "btn-m"}
        onClick={() => toggleActiveComp("featured")}
      >
        Featured
      </button>
      <button
        className={activeComp === "latest" ? "btn-m active" : "btn-m"}
        onClick={() => toggleActiveComp("latest")}
      >
        Latest
      </button>
    </div>
  );
};

export default MobileNavigation;
