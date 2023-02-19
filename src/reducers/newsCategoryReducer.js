import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_ERROR,
  GET_NEWS_CATEGORY_GENERAL_SUCCESS,
  GET_NEWS_CATEGORY_HEALTH_SUCCESS,
  GET_NEWS_CATEGORY_BUSINESS_SUCCESS,
  GET_NEWS_CATEGORY_SCIENCE_SUCCESS,
  GET_NEWS_CATEGORY_SPORT_SUCCESS,
  GET_NEWS_CATEGORY_TECHNOLOGY_SUCCESS,
  SORT_LATEST_NEWS,
  GET_NEWS_ARRAY,
  HANDLE_SEARCH,
  GET_CURRENT_LOCATION,
} from "../helpers/actions";

const newsCategoryReducer = (state, action) => {
  if (action.type === GET_NEWS_CATEGORY_BEGIN) {
    return { ...state, newsCategoryLoading: true };
  }
  if (action.type === GET_NEWS_CATEGORY_ERROR) {
    return { ...state, newsCategoryLoading: false, newsCategoryError: true };
  }
  // Fetch news from each category
  if (action.type === GET_NEWS_CATEGORY_GENERAL_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "general" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsGeneral: newsCat,
    };
  }
  if (action.type === GET_NEWS_CATEGORY_HEALTH_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "health" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsHealth: newsCat,
    };
  }
  if (action.type === GET_NEWS_CATEGORY_BUSINESS_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "business" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsBusiness: newsCat,
    };
  }
  if (action.type === GET_NEWS_CATEGORY_SCIENCE_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "science" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsScience: newsCat,
    };
  }
  if (action.type === GET_NEWS_CATEGORY_SPORT_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "sport" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsSport: newsCat,
    };
  }
  if (action.type === GET_NEWS_CATEGORY_TECHNOLOGY_SUCCESS) {
    const newsCat = action.payload.map((obj) => {
      return { ...obj, category: "tech" };
    });
    return {
      ...state,
      newsCategoryLoading: false,
      newsTech: newsCat,
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
    const {
      newsBusiness,
      newsGeneral,
      newsHealth,
      newsScience,
      newsSport,
      newsTech,
    } = state;
    const newArray = [
      ...newsGeneral,
      ...newsBusiness,
      ...newsHealth,
      ...newsSport,
      ...newsScience,
      ...newsTech,
    ];

    return {
      ...state,
      newsArray: [...newArray],
    };
  }

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
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default newsCategoryReducer;
