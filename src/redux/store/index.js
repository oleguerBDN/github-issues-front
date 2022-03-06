import thunk from "redux-thunk";
import rootReducer from "../reducers";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = (initValues) =>
  createStore(
    rootReducer,
    initValues,
    composeWithDevTools(applyMiddleware(thunk))
  );

export default configureStore;
