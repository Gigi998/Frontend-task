import React, { useContext, useReducer, useEffect, ReactNode } from "react";
import mobileLayoutReducer from "../reducers/mobileLayoutReducer";
import {
  IS_MOBILE_LAYOUT,
  TOGGLE_COMP,
  IS_SIDEBAR_OPEN,
  CLOSE_SIDEBAR,
} from "../helpers/actions";
import { useMediaQuery } from "react-responsive";

type MobileProviderProps = {
  children: ReactNode;
};

export type StateType = {
  isMobile: boolean;
  activeComp: "featured" | "latest";
  isSidebarOpen: boolean;
};

type MobileLayoutContext = {
  state: StateType;
  toggleActiveComp: (value: "featured" | "latest") => void;
  toggleSidebar: () => void;
};

const initialState: StateType = {
  isMobile: false,
  activeComp: "featured",
  isSidebarOpen: false,
};

const MobileLayoutContext = React.createContext({} as MobileLayoutContext);

export const MobileLayoutProvider = ({ children }: MobileProviderProps) => {
  const [state, dispatch] = useReducer(mobileLayoutReducer, initialState);
  const mobile = useMediaQuery({ maxWidth: 650 });

  const toggleActiveComp = (value: "latest" | "featured") => {
    dispatch({ type: TOGGLE_COMP, payload: value });
  };

  const toggleSidebar = () => {
    dispatch({ type: IS_SIDEBAR_OPEN });
  };

  useEffect(() => {
    dispatch({ type: IS_MOBILE_LAYOUT, payload: mobile });
    dispatch({ type: CLOSE_SIDEBAR });
  }, [mobile]);

  return (
    <MobileLayoutContext.Provider
      value={{
        state,
        toggleActiveComp,
        toggleSidebar,
      }}
    >
      {children}
    </MobileLayoutContext.Provider>
  );
};

export const useMobileLayoutContext = () => {
  return useContext(MobileLayoutContext);
};
