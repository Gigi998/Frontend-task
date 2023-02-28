import {
  TOGGLE_COMP,
  IS_MOBILE_LAYOUT,
  IS_SIDEBAR_OPEN,
  CLOSE_SIDEBAR,
} from "../helpers/actions";
import { StateType } from "../context/mobileLayoutContext";

type Action =
  | {
      type: "TOGGLE_COMP";
      payload: "latest" | "featured";
    }
  | {
      type: "IS_MOBILE_LAYOUT";
      payload: boolean;
    }
  | {
      type: "IS_SIDEBAR_OPEN";
    }
  | {
      type: "CLOSE_SIDEBAR";
    };

const mobileLayoutReducer = (state: StateType, action: Action): StateType => {
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
  return state;
};

export default mobileLayoutReducer;
