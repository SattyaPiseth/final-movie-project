import {applyMiddleware, compose, legacy_createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer";
import {thunk} from "redux-thunk";

/**
 * store is the place where the data is stored and managed in the application.
 */
const middleware = [thunk];

/**
 * store is created using createStore function which takes two arguments rootReducer and middleware
 */
export const store = legacy_createStore(rootReducer, compose(applyMiddleware(...middleware)));