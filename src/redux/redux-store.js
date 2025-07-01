import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const reducers = combineReducers({});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;