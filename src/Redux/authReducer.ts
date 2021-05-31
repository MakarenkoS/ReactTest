import { BaseThunkType, InferActionsTypes } from "./store"
import { AuthDataType, CLEAR_FILTER, USER_LOGIN, USER_LOGOUT } from "./types"
import { authActions } from "./actions"


export const initialState = {
  isAuth: true,
}

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof authActions>
type ThunkType = BaseThunkType<ActionTypes>
// type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>


export const authReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch(action.type) {
    case USER_LOGIN: 
      return {...state, isAuth: true}
    case USER_LOGOUT: 
      return {...state, isAuth: false}
    default: 
      return {...state}
  }
}

//-----------------------------------------------Thunks------------------------------------------

export const authorizeUser = (data: AuthDataType): ThunkType => {
  return  (dispatch) => {
    if (data.name === 'I') {
      dispatch(authActions.login())
    } else {
      //@ts-ignore
      window.M.toast({html: 'Incorrect name or pass'})
    }
  }
}