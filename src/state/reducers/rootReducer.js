import { combineReducers } from "redux";
import authReducers from "./authReducer";
import errorReducer from "./errorReducer";
import requestStatus from "./requestStatus";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  auth: authReducers,
  error: errorReducer,
  status: requestStatus,
  user: userReducer,
});

export default rootReducer;
