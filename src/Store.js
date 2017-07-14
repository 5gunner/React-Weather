import { createStore, applyMiddleware, compose } from "redux";
import { AllReducers } from "./reducers";
import logger from "redux-logger";
import thunk from "redux-thunk";

export const Store = createStore(
  AllReducers,
  {},
  compose(
    applyMiddleware(logger, thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default Store;