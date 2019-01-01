import { ACTION_TYPES } from "./actions";

const initialState = {
  userName: "",
  loading: false,
  error: null
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOADING:
      return {
        ...state,
        loading: true,
        error: null
      };
    case ACTION_TYPES.FULFILLED:
      return {
        ...state,
        userName: action.payload,
        loading: false,
        error: null
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        userName: "",
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default userData;
