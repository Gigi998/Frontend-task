import React, { useContext, useReducer, useEffect, ReactNode } from "react";
import axios from "axios";
import newsCategoryReducer from "../reducers/newsCategoryReducer";
import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_SUCCESS,
  GET_NEWS_CATEGORY_ERROR,
  SORT_LATEST_NEWS,
  GET_NEWS_ARRAY,
  HANDLE_SEARCH,
  GET_CURRENT_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_DUPLICATES,
  REMOVE_FROM_FAVORITES,
} from "../helpers/actions";
import {
  urlCategory,
  api7,
  api6,
  api5,
  api4,
  api3,
  api2,
  api1,
  api8,
} from "../helpers/urls";
import { categoriesArray } from "../helpers/navLinks";
import { getFromLocStor } from "../helpers/localStorage";

type NewsProviderProps = {
  children: ReactNode;
};

export type NewsArrayType = {
  author: string;
  title: string;
  description: null | string;
  urlToImage: null | string;
  publishedAt: string;
  category: string;
  id: string;
  inFavorites: boolean;
};

export type CategoryStateType = {
  newsCategoryLoading: boolean;
  newsCategoryError: { error: boolean; msg: string };
  newsArray: NewsArrayType[];
  newsCategories: {
    business: NewsArrayType[];
    general: NewsArrayType[];
    health: NewsArrayType[];
    science: NewsArrayType[];
    sport: NewsArrayType[];
    technology: NewsArrayType[];
  };
  query: string;
  filterArray: NewsArrayType[];
  currentLocation: string;
  favoritesArray: NewsArrayType[];
};

type NewsCategoryContext = {
  state: CategoryStateType;
  fetchByCategory: (url: string, category: string, api: string) => void;
  addToFavorites: (id: string) => void;
  handleSearch: (value: string) => void;
  getCurrentLocation: (loc: string) => void;
  removeFromFavorites: (id: string) => void;
};

const initialState: CategoryStateType = {
  newsCategoryLoading: false,
  newsCategoryError: {
    error: false,
    msg: "",
  },
  newsArray: [],
  newsCategories: {
    business: [],
    general: [],
    health: [],
    science: [],
    sport: [],
    technology: [],
  },
  query: "",
  filterArray: [],
  currentLocation: "",
  favoritesArray: getFromLocStor(),
};

const NewsCategoryContext = React.createContext({} as NewsCategoryContext);

export const NewsCategoryProvider = ({ children }: NewsProviderProps) => {
  const [state, dispatch] = useReducer(newsCategoryReducer, initialState);

  const fetchByCategory = async (
    url: string,
    category: string,
    api: string
  ) => {
    dispatch({ type: GET_NEWS_CATEGORY_BEGIN });
    try {
      const response = await axios.get(
        `${url}category=${category}&apiKey=${api}`
      );
      const news = response.data.articles;
      dispatch({
        type: GET_NEWS_CATEGORY_SUCCESS,
        payload: {
          category: category,
          list: news,
        },
      });
    } catch (error) {
      dispatch({ type: GET_NEWS_CATEGORY_ERROR, payload: error.message });
      if (error.message === "Request failed with status code 429") {
        console.log("You run out of the requests, change the api key");
      }
    }
  };
  // Fetch data
  useEffect(() => {
    categoriesArray.forEach((cat) => {
      // Change api key here
      return fetchByCategory(urlCategory, cat, process.env.REACT_APP_API_KEY);
    });
  }, []);

  // Merge, sort by date and remove duplicates
  useEffect(() => {
    dispatch({ type: GET_NEWS_ARRAY });
    dispatch({ type: SORT_LATEST_NEWS });
    dispatch({ type: REMOVE_DUPLICATES });
  }, [state.newsCategories]);

  const addToFavorites = (id: string) => {
    dispatch({ type: ADD_TO_FAVORITES, payload: id });
  };
  const handleSearch = (value: string) => {
    dispatch({ type: HANDLE_SEARCH, payload: value });
  };

  const getCurrentLocation = (loc: string) => {
    dispatch({ type: GET_CURRENT_LOCATION, payload: loc });
  };

  const removeFromFavorites = (id: string) => {
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: id });
  };

  return (
    <NewsCategoryContext.Provider
      value={{
        state,
        fetchByCategory,
        handleSearch,
        getCurrentLocation,
        addToFavorites,
        removeFromFavorites,
      }}
    >
      {children}
    </NewsCategoryContext.Provider>
  );
};

export const useNewsCategoryContext = () => {
  return useContext(NewsCategoryContext);
};
