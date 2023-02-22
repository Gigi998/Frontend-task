import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_ERROR,
  GET_NEWS_CATEGORY_SUCCESS,
  SORT_LATEST_NEWS,
  GET_NEWS_ARRAY,
  HANDLE_SEARCH,
  GET_CURRENT_LOCATION,
  ADD_TO_FAVORITES,
  REMOVE_DUPLICATES,
} from "../helpers/actions";
import { v4 as uuidv4 } from "uuid";

const newsCategoryReducer = (state, action) => {
  if (action.type === GET_NEWS_CATEGORY_BEGIN) {
    return { ...state, newsCategoryLoading: true };
  }
  if (action.type === GET_NEWS_CATEGORY_ERROR) {
    return { ...state, newsCategoryLoading: false, newsCategoryError: true };
  }
  // Fetch news from each category
  if (action.type === GET_NEWS_CATEGORY_SUCCESS) {
    const category = action.payload.category;
    const data = action.payload.list;
    const newsCat = data.map((obj) => {
      return { ...obj, category: category, id: uuidv4(), inFavorites: false };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsCategories: {
        ...state.newsCategories,
        [category]: newsCat,
      },
    };
  }
  // Sort by date
  if (action.type === SORT_LATEST_NEWS) {
    const sortedNews = state.newsArray.sort(
      (a, b) =>
        new Date(Date.parse(b.publishedAt)).getTime() -
        new Date(Date.parse(a.publishedAt)).getTime()
    );
    return {
      ...state,
      newsArray: sortedNews,
    };
  }
  // Merge all category arrays
  if (action.type === GET_NEWS_ARRAY) {
    const newArray = [
      ...state.newsCategories.business,
      ...state.newsCategories.general,
      ...state.newsCategories.health,
      ...state.newsCategories.science,
      ...state.newsCategories.sport,
      ...state.newsCategories.technology,
    ];
    return {
      ...state,
      newsArray: [...newArray],
    };
  }
  // Remove duplcates
  if (action.type === REMOVE_DUPLICATES) {
    const titleSet = new Set();
    const newSetArr = state.newsArray.filter((obj) => {
      if (titleSet.has(obj.title)) {
        return false;
      }
      titleSet.add(obj.title);
      return true;
    });
    return {
      ...state,
      newsArray: newSetArr,
    };
  }
  // Get the page location
  if (action.type === GET_CURRENT_LOCATION) {
    return { ...state, currentLocation: action.payload };
  }
  // Handle search
  if (action.type === HANDLE_SEARCH) {
    if (state.currentLocation === "/") {
      const filtered = state.newsArray.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/general") {
      const filtered = state.newsGeneral.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/science") {
      const filtered = state.newsScience.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/business") {
      const filtered = state.newsBusiness.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/health") {
      const filtered = state.newsHealth.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/sports") {
      const filtered = state.newsSport.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/technology") {
      const filtered = state.newsTech.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
    if (state.currentLocation === "/favorites") {
      const filtered = state.favoritesArray.filter((item) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      return {
        ...state,
        query: action.payload,
        filterArray: [...filtered],
      };
    }
  }
  // Add to favorites
  if (action.type === ADD_TO_FAVORITES) {
    const item = state.newsArray.find((i) => i.title === action.payload);
    return {
      ...state,
      favoritesArray: [...state.favoritesArray, { ...item }],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default newsCategoryReducer;
