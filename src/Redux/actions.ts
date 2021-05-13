import { SET_DATA, USER_LOGIN, USER_LOGOUT, JsonDataType } from "./types"

export const authActions = {
  logout: () => ({ type: USER_LOGOUT } as const),
  login: () => ({ type: USER_LOGIN } as const)
}

export const jsonPageActions = {
  setData: (data:  Array<JsonDataType>) => ({ type: SET_DATA, payload: data } as const)
}


