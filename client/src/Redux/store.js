import { createStore, applyMiddleware, compose } from "redux";
import { Reducer }from "./reducer";
import thunk from "redux-thunk";

export const store = createStore(Reducer,applyMiddleware(thunk) )
