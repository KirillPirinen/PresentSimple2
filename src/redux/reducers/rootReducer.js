import { combineReducers } from "redux";
import { createFormReducer } from "./createFormReducer";
import groupPageReducer from "./groupPageReducer";
import informerReducer from "./informerReducer";
import loaderReducer from "./loaderReducer";
import modalReducer from "./modalReducer";
import { presentsReducer } from "./presentsReducer";
import profileReducer from "./profileReducer";
import { searchReducer } from "./searchReducer";
import { SentFormReducer } from "./SentFormReducer";
import userReducer from "./userReducer";
import { wishesGroupAloneReducer } from "./wishesGroupAloneReducer";

const rootReducer = combineReducers({
  user: userReducer,
  informer: informerReducer,
  search: searchReducer,
  loader:loaderReducer,
  createForm:createFormReducer,
  sentForm:SentFormReducer,
  presents:presentsReducer,
  modal:modalReducer,
  wishlist:wishesGroupAloneReducer,
  profile:profileReducer,
  groupPage:groupPageReducer
});

export default rootReducer;
