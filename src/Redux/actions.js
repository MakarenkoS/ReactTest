import { USER_LOGIN, USER_LOGOUT } from "./types"

export const logout = () => {
  return {type: USER_LOGOUT}
}


export const login = () => {
  return {type: USER_LOGIN}
}

