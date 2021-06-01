export const USER_LOGIN = 'auth/USER_LOGIN'
export const USER_LOGOUT = 'auth/USER_LOGOUT'

export const SET_DATA = 'jsonPage/SET_DATA'
export const SET_FILTER = 'jsonPage/SET_FILTER'
export const CLEAR_FILTER = 'jsonPage/CLEAR_FILTER'

export const SET_COURSES = 'coursesPage/SET_COURSES'
export const SET_COURSES_DATE = 'coursesPage/SET_COURSES_DATE'

export type AuthDataType = {
  name: string
  password: string
}

export type JsonDataType = {
  id: number
  title: string
}

interface Valute  {
  CharCode: string,
  ID: string
  Name: string
  Nominal: number
  NumCode: string
  Previous: number
  Value: number
}

export interface Valutes {
  [key: string]: Valute
}