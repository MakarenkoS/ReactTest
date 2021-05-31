import { SET_DATA, USER_LOGIN, USER_LOGOUT, JsonDataType, SET_FILTER, CLEAR_FILTER } from "./types"

export const authActions = {
  logout: () => ({ type: USER_LOGOUT } as const),
  login: () => ({ type: USER_LOGIN } as const)
}

export const jsonPageActions = {
  setData: (data:  Array<JsonDataType>) => ({ type: SET_DATA, payload: data } as const),
  setFilter: (filter: string) => ({type: SET_FILTER, filterString: filter} as const ),
  clearFilter: () => ({type: CLEAR_FILTER}) as const
}




