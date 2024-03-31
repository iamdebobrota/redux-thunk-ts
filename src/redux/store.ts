import {
  applyMiddleware,
  compose,
  combineReducers,
  legacy_createStore,
} from "redux";
import { thunk, ThunkDispatch, ThunkMiddleware } from "redux-thunk";

import { ArticleAction } from "../constraints/types";
import { todoReducer } from "./appReducer/reducer";
import { TodoAction, TodoState } from "./appReducer/actionType";

export interface RootState {
  todo: TodoState;
  
}

const rootReducers = combineReducers<RootState>({
  todo: todoReducer,
});

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export type AppState = ReturnType<typeof rootReducers>;

// Create a ThunkMiddleware instance
const thunkMiddleware: ThunkMiddleware<AppState, ArticleAction> = thunk;

export const store = legacy_createStore<AppState, ArticleAction>(
  rootReducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);
export type AppDispatch = ThunkDispatch<RootState, void, TodoAction>;
