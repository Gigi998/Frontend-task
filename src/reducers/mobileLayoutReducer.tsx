import {
  TOGGLE_COMP,
  IS_MOBILE_LAYOUT,
  IS_SIDEBAR_OPEN,
  CLOSE_SIDEBAR,
} from "../helpers/actions";

const mobileLayoutReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_COMP:
      return {
        ...state,
        activeComp: action.payload,
      };
    case IS_MOBILE_LAYOUT:
      return {
        ...state,
        isMobile: action.payload,
      };
    case IS_SIDEBAR_OPEN:
      return {
        ...state,
        isSidebarOpen: !state.isSidebarOpen,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isSidebarOpen: false,
      };
    default:
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default mobileLayoutReducer;
