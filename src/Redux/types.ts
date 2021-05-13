export const USER_LOGIN = 'auth/USER_LOGIN'
export const USER_LOGOUT = 'auth/USER_LOGOUT'

export const SET_DATA = 'jsonPage/SET_DATA'

export type AuthDataType = {
  name: string
  password: string
}

export type JsonDataType = {
  id: number
  title: string

}