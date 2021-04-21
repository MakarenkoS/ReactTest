import { USER_LOGIN, USER_LOGOUT } from "./types"


export const mainReducer = (state, action) => {
  switch(action.type) {
    case '__INIT__': 
      console.log('INIT')
      return {...state}
    case USER_LOGIN: 
      return {...state, isAuth: true}
    case USER_LOGOUT: 
      return {...state, isAuth: false}
    default: 
      return {...state}
  }
}


