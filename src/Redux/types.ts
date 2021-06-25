export const USER_LOGIN = 'auth/USER_LOGIN'
export const USER_LOGOUT = 'auth/USER_LOGOUT'

export const SET_DATA = 'jsonPage/SET_DATA'
export const SET_FILTER = 'jsonPage/SET_FILTER'
export const CLEAR_FILTER = 'jsonPage/CLEAR_FILTER'
export const DELETE_ITEM = 'jsonPage/DELETE_ITEM'
export const SET_IS_FETCHING__JSON = 'jsonPage/SET_IS_FETCHING'

export const SET_COURSES = 'coursesPage/SET_COURSES'
export const SET_COURSES_DATE = 'coursesPage/SET_COURSES_DATE'
export const CLEAR_COURSES = 'coursesPage/CLEAR_COURSES'
export const SET_IS_FETCHING = 'coursesPage/SET_IS_FETCHING'

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

interface dateOptionsInterface {
  year: "numeric" | "2-digit" | undefined
  month: "numeric" | "2-digit" | "long" | "short" | "narrow" | undefined
  day: "numeric" | "2-digit" | undefined
  weekday:  "long" | "short" | "narrow" | undefined
  timezone: string
  hour: "numeric" | "2-digit" | undefined
  minute: "numeric" | "2-digit" | undefined
  second: "numeric" | "2-digit" | undefined
}

export const dateOptions: dateOptionsInterface = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timezone: "UTC+3",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};