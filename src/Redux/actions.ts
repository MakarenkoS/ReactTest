import { SET_DATA, USER_LOGIN, USER_LOGOUT, JsonDataType, SET_FILTER, CLEAR_FILTER, SET_COURSES, SET_COURSES_DATE, CLEAR_COURSES, SET_IS_FETCHING } from "./types"

export const authActions = {
  logout: () => ({ type: USER_LOGOUT } as const),
  login: () => ({ type: USER_LOGIN } as const)
}

export const jsonPageActions = {
  setData: (data:  Array<JsonDataType>) => ({ type: SET_DATA, payload: data } as const),
  setFilter: (filter: string) => ({type: SET_FILTER, filterString: filter} as const ),
  clearFilter: () => ({type: CLEAR_FILTER}) as const
}

export const coursesPageActions = {
  setCourses: (coursesData: any) => ({ type: SET_COURSES, payload: coursesData} as const),
  setCoursesDate: (date: string) => ({ type: SET_COURSES_DATE, payload: date} as const),
  clearCourses: () => ({ type: CLEAR_COURSES} as const),
  setIsFetching: (isFetching: boolean) => ({ type: SET_IS_FETCHING, isFetching} as const),
}




