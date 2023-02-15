import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import newsCategoryReducer from "../reducers/newsCategoryReducer";
import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_SUCCESS,
  GET_NEWS_CATEGORY_ERROR,
  SET_CATEGORY,
} from "../actions";

const initialState = {
  newsCategoryLoading: false,
  newsCategoryError: false,
  newsCategory: [],
  category: "",
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
      dispatch({ type: GET_NEWS_CATEGORY_SUCCESS, payload: news });
    } catch (error) {
      dispatch({ type: GET_NEWS_CATEGORY_ERROR });
    }
  };

  const setCategory = (category) => {
    dispatch({ type: SET_CATEGORY, payload: category });
  };

  return (
    <NewsCategoryContext.Provider
      value={{ ...state, fetchByCategory, setCategory }}
    >
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategoryContext = () => {
  return useContext(NewsCategoryContext);
};
