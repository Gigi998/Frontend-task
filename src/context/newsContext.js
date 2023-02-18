import React, { useContext, useEffect, useReducer } from "react";
import newsReducer from "../reducers/newsReducer";
import {
  GET_NEWS_BEGIN,
  GET_NEWS_SUCCESS,
  GET_NEWS_ERROR,
  NEWS_HANDLE_CHANGE,
} from "../helpers/actions";
import axios from "axios";

const initialState = {
  newsLoading: false,
  newsError: false,
  news: [],
  query: "",
};

const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const fetchNews = async (url) => {
    dispatch({ type: GET_NEWS_BEGIN });
    try {
      const response = await axios.get(url);
      const news = response.data.articles;
      dispatch({ type: GET_NEWS_SUCCESS, payload: news });
    } catch (error) {
      dispatch({ type: GET_NEWS_ERROR });
    }
  };

  const handleChange = (value) => {
    dispatch({ type: NEWS_HANDLE_CHANGE, payload: value });
  };

  return (
    <NewsContext.Provider value={{ ...state, fetchNews, handleChange }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
