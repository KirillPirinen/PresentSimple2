import { combineReducers } from "redux";
import informerReducer from "./informerReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  informer: informerReducer
});

export default rootReducer;
