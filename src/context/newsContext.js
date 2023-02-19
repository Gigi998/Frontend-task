import React, { useContext, useReducer } from "react";
import newsReducer from "../reducers/newsReducer";
import { MERGE_NEWS_ARRAY } from "../helpers/actions";

const initialState = {
  newsLoading: false,
  newsError: false,
  newsArray: [],
  query: "",
};

const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const mergeNewsArray = (arrays) => {
    dispatch({ type: MERGE_NEWS_ARRAY, payload: arrays });
  };

  return (
    <NewsContext.Provider value={{ ...state, mergeNewsArray }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
