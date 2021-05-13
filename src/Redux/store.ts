import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk, { ThunkAction } from "redux-thunk";
import { authReducer } from "./authReducer";
import { jsonPageReducer } from "./jsonPageReducer";
import {Action} from 'redux'

const reducers = combineReducers({
  auth: authReducer,
  jsonPage: jsonPageReducer
})

export const store = createStore(reducers,
  compose(
    applyMiddleware(thunk),
    //@ts-ignore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )
  
type ReducersType = typeof reducers
export type AppStateType = ReturnType<ReducersType>

export type InferActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U} ? U: never
export type BaseThunkType<A extends Action, R = Promise<void> | void > = ThunkAction<R, AppStateType, unknown, A>
