import {
  GET_NEWS_CATEGORY_BEGIN,
  GET_NEWS_CATEGORY_SUCCESS,
  GET_NEWS_CATEGORY_ERROR,
  SET_CATEGORY,
} from "../helpers/actions";

const newsCategoryReducer = (state, action) => {
  if (action.type === GET_NEWS_CATEGORY_BEGIN) {
    return { ...state, newsCategoryLoading: true };
  }
  if (action.type === GET_NEWS_CATEGORY_ERROR) {
    return { ...state, newsCategoryLoading: false, newsCategoryError: true };
  }
  if (action.type === GET_NEWS_CATEGORY_SUCCESS) {
    return {
      ...state,
      newsCategoryLoading: false,
      newsCategory: action.payload,
    };
  }
  if (action.type === SET_CATEGORY) {
    return {
      ...state,
      category: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default newsCategoryReducer;
