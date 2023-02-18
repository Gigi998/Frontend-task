import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import newsCategoryReducer from "../reducers/newsCategoryReducer";
import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_HEALTH_SUCCESS,
  GET_NEWS_CATEGORY_GENERAL_SUCCESS,
  GET_NEWS_CATEGORY_BUSINESS_SUCCESS,
  GET_NEWS_CATEGORY_SCIENCE_SUCCESS,
  GET_NEWS_CATEGORY_SPORT_SUCCESS,
  GET_NEWS_CATEGORY_TECHNOLOGY_SUCCESS,
  GET_NEWS_CATEGORY_ERROR,
  CLEAR_OLD_NEWS,
  SORT_LATEST_NEWS,
  GET_NEWS_ARRAY,
  HANDLE_SEARCH,
  UPDATE_ARRAY,
} from "../helpers/actions";

const initialState = {
  newsCategoryLoading: false,
  newsCategoryError: false,
  newsArray: [],
  newsGeneral: [],
  newsBusiness: [],
  newsHealth: [],
  newsScience: [],
  newsSport: [],
  newsTech: [],
  query: "",
};

const NewsCategoryContext = React.createContext();

export const NewsCategoryProvider = ({ children }) => {
  const [state, dispatch] = useReducer(newsCategoryReducer, initialState);

  const fetchByCategory = async (url, category, api) => {
    dispatch({ type: GET_NEWS_CATEGORY_BEGIN });
    try {
      const response = await axios.get(
        `${url}category=${category}&apiKey=${api}`
      );
      const news = response.data.articles;
      if (category === "general")
        return dispatch({
          type: GET_NEWS_CATEGORY_GENERAL_SUCCESS,
          payload: news,
        });
      if (category === "health")
        return dispatch({
          type: GET_NEWS_CATEGORY_HEALTH_SUCCESS,
          payload: news,
        });
      if (category === "business")
        return dispatch({
          type: GET_NEWS_CATEGORY_BUSINESS_SUCCESS,
          payload: news,
        });
      if (category === "science")
        return dispatch({
          type: GET_NEWS_CATEGORY_SCIENCE_SUCCESS,
          payload: news,
        });
      if (category === "sport")
        return dispatch({
          type: GET_NEWS_CATEGORY_SPORT_SUCCESS,
          payload: news,
        });
      if (category === "technology")
        return dispatch({
          type: GET_NEWS_CATEGORY_TECHNOLOGY_SUCCESS,
          payload: news,
        });
    } catch (error) {
      dispatch({ type: GET_NEWS_CATEGORY_ERROR });
    }
  };

  const clearOldNews = () => {
    dispatch({ type: CLEAR_OLD_NEWS });
  };

  const sortLatestNews = () => {
    dispatch({ type: SORT_LATEST_NEWS });
  };

  const getNewsArray = () => {
    dispatch({ type: GET_NEWS_ARRAY });
  };

  const handleSearch = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: value });
  };

  return (
    <NewsCategoryContext.Provider
      value={{
        ...state,
        fetchByCategory,
        clearOldNews,
        sortLatestNews,
        getNewsArray,
        handleSearch,
      }}
    >
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategoryContext = () => {
  return useContext(NewsCategoryContext);
};
