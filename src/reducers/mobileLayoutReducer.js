import { TOGGLE_COMP } from "../helpers/actions";

const mobileLayoutReducer = (state, action) => {
  if (action.type === TOGGLE_COMP) {
    return {
      ...state,
      activeComp: action.payload,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default mobileLayoutReducer;
