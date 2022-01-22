import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'
import initState from "./initState";
import chatMiddleware from "./middleware/chatMiddleware";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk, chatMiddleware)))

export default store
