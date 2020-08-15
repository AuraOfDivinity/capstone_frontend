import { SET_CURRENT_USER } from "../types/types";

const initialState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        isAuthenticated: Boolean(
          typeof action.payload === "object" &&
            Object.keys(action.payload).length !== 0
        ),
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
