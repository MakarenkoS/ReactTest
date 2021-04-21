import { createStore, compose, applyMiddleware } from "redux";
import { mainReducer } from "./mainReducer";
import { initialState } from "./initialState";
import thunk from "redux-thunk"

export const store = createStore(mainReducer, initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  

