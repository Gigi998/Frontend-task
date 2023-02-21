import React, { useContext, useReducer } from "react";
import mobileLayoutReducer from "../reducers/mobileLayoutReducer";
import { IS_MOBILE_LAYOUT, TOGGLE_COMP } from "../helpers/actions";

const initialState = {
  isMobile: false,
  activeComp: "featured",
};

const MobileLayoutContext = React.createContext();

export const MobileLayoutProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mobileLayoutReducer, initialState);

  const toggleActiveComp = (value) => {
    dispatch({ type: TOGGLE_COMP, payload: value });
  };

  return (
    <MobileLayoutContext.Provider
      value={{
        ...state,
        toggleActiveComp,
      }}
    >
      {children}
    </MobileLayoutContext.Provider>
  );
};

export const useMobileLayoutContext = () => {
  return useContext(MobileLayoutContext);
};
