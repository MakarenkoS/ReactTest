import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./authReducer";
import { jsonPageReducer } from "./jsonPageReducer";

const reducers = combineReducers({
  auth: authReducer,
  jsonPage: jsonPageReducer
})

export const store = createStore(reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  

