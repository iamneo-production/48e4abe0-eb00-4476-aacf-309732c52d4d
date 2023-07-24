// reducers.js
import { combineReducers } from "redux";
import { SET_ROLE } from "../action";

const initialState = {
  role: null,
};

const roleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default combineReducers({
  userData: roleReducer,
});
