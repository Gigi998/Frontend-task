import { GET_NEWS_BEGIN, GET_NEWS_SUCCESS, GET_NEWS_ERROR } from "../actions";

const newsReducer = (state, action) => {
  if (action.type === GET_NEWS_BEGIN) {
    return { ...state, newsLoading: true };
  }
  if (action.type === GET_NEWS_ERROR) {
    return { ...state, newsLoading: false, newsError: true };
  }
  if (action.type === GET_NEWS_SUCCESS) {
    return {
      ...state,
      newsLoading: false,
      news: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default newsReducer;
