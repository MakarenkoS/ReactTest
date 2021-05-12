import { SET_DATA, USER_LOGIN, USER_LOGOUT } from "./types"

export const logout = () => {
  return {type: USER_LOGOUT}
}

export const login = () => {
  return {type: USER_LOGIN}
}



export const setData = (data) => {
  return {type: SET_DATA, payload: data }
}
