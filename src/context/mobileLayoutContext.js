import React, { useContext, useReducer } from "react";
import mobileLayoutReducer from "../reducers/mobileLayoutReducer";
import {
  IS_MOBILE_LAYOUT,
  TOGGLE_COMP,
  IS_SIDEBAR_OPEN,
  CLOSE_SIDEBAR,
} from "../helpers/actions";

const initialState = {
  isMobile: false,
  activeComp: "featured",
  isSidebarOpen: false,
};

const MobileLayoutContext = React.createContext();

export const MobileLayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mobileLayoutReducer, initialState);

  const toggleActiveComp = (value) => {
    dispatch({ type: TOGGLE_COMP, payload: value });
  };

  const setIsMobile = (value) => {
    dispatch({ type: IS_MOBILE_LAYOUT, payload: value });
  };

  const toggleSidebar = () => {
    dispatch({ type: IS_SIDEBAR_OPEN });
  };

  const closeSidebar = () => {
    dispatch({ type: CLOSE_SIDEBAR });
  };

  return (
    <MobileLayoutContext.Provider
      value={{
        ...state,
        toggleActiveComp,
        setIsMobile,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </MobileLayoutContext.Provider>
  );
};

export const useMobileLayoutContext = () => {
  return useContext(MobileLayoutContext);
};
