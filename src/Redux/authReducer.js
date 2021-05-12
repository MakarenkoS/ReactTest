import { USER_LOGIN, USER_LOGOUT } from "./types"
import { login } from "./actions"

export const initialState = {
  isAuth: true,
}


export const authReducer = (state = initialState, action) => {
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

export const authorizeUser = (data) => {
  return dispatch => {
    if (data.name === 'I') {
      dispatch(login())
    } else {
      window.M.toast({html: "Incorrect name or password"})
    }
  
  }
}