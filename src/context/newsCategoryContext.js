import React, { useContext, useReducer } from "react";
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
  SORT_LATEST_NEWS,
  GET_NEWS_ARRAY,
  HANDLE_SEARCH,
  GET_CURRENT_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_DUPLICATES,
} from "../helpers/actions";

const initialState = {
  newsCategoryLoading: false,
  newsCategoryError: false,
  newsArray: [],
  newsCategories: {
    newsBusiness: [],
    newsGeneral: [],
    newsHealth: [],
    newsScience: [],
    newsSport: [],
    newsTech: [],
  },

  newsGeneral: [],
  newsBusiness: [],
  newsHealth: [],
  newsScience: [],
  newsSport: [],
  newsTech: [],
  query: "",
  filterArray: [],
  currentLocation: "",
  favoritesArray: [],
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
      switch (category) {
        case "general":
          return dispatch({
            type: GET_NEWS_CATEGORY_GENERAL_SUCCESS,
            payload: news,
          });
        case "health":
          return dispatch({
            type: GET_NEWS_CATEGORY_HEALTH_SUCCESS,
            payload: news,
          });
        case "business":
          return dispatch({
            type: GET_NEWS_CATEGORY_BUSINESS_SUCCESS,
            payload: news,
          });
        case "science":
          return dispatch({
            type: GET_NEWS_CATEGORY_SCIENCE_SUCCESS,
            payload: news,
          });
        case "sport":
          return dispatch({
            type: GET_NEWS_CATEGORY_SPORT_SUCCESS,
            payload: news,
          });
        case "technology":
          return dispatch({
            type: GET_NEWS_CATEGORY_TECHNOLOGY_SUCCESS,
            payload: news,
          });
        default:
          throw new Error();
      }
    } catch (error) {
      dispatch({ type: GET_NEWS_CATEGORY_ERROR });
    }
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

  const getCurrentLocation = (loc) => {
    dispatch({ type: GET_CURRENT_LOCATION, payload: loc });
  };

  const addToFavorites = (id) => {
    dispatch({ type: ADD_TO_FAVORITES, payload: id });
  };

  const removeDuplicates = () => {
    dispatch({ type: REMOVE_DUPLICATES });
  };

  return (
    <NewsCategoryContext.Provider
      value={{
        ...state,
        fetchByCategory,
        sortLatestNews,
        getNewsArray,
        handleSearch,
        getCurrentLocation,
        addToFavorites,
        removeDuplicates,
      }}
    >
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategoryContext = () => {
  return useContext(NewsCategoryContext);
};
