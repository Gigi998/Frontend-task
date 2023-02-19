import React, { useContext, useReducer } from "react";

const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
  return (
    <NewsContext.Provider value={"hello"}>{children}</NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
