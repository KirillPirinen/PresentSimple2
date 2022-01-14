import { combineReducers } from "redux";
import { createFormReducer } from "./createFormReducer";
import informerReducer from "./informerReducer";
import loaderReducer from "./loaderReducer";
import { searchReducer } from "./searchReducer";
import { SentFormReducer } from "./SentFormReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  informer: informerReducer,
  search: searchReducer,
  loader:loaderReducer,
  createForm:createFormReducer,
  sentForm:SentFormReducer
});

export default rootReducer;
