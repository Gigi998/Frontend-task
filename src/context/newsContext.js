import React, { useContext, useEffect, useReducer } from "react";
import newsReducer from "../reducers/newsReducer";
import { GET_NEWS_BEGIN, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "../actions";
import axios from "axios";

// URL
const allNewsUrl = `https://newsapi.org/v2/everything?q=trump&pageSize=50&sortBy=publishedAt&apiKey=9370eb68c6004acd940c8644a2689e0c`;

const initialState = {
  newsLoading: false,
  newsError: false,
  news: [],
};

const NewsContext = React.createContext();

export const NewsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  const fetchNews = async (url) => {
    dispatch({ type: GET_NEWS_BEGIN });
    try {
      const response = await axios.get(url);
      const news = response.data.articles;
      console.log(news);
      dispatch({ type: GET_NEWS_SUCCESS, payload: news });
    } catch (error) {
      dispatch({ type: GET_NEWS_ERROR });
    }
  };

  useEffect(() => {
    fetchNews(allNewsUrl);
  }, []);

  return (
    <NewsContext.Provider value={{ ...state }}>{children}</NewsContext.Provider>
  );
};

export const useNewsContext = () => {
  return useContext(NewsContext);
};
