import { coursesApi } from "../api/api"
import { coursesPageActions } from "./actions"
import { BaseThunkType, InferActionsTypes } from "./store"
import { CLEAR_COURSES, SET_COURSES, SET_COURSES_DATE, SET_IS_FETCHING, Valutes } from "./types"



export const initialState = {
  date: '',
  valutes: {} as Valutes || null,
  isFetching: false
}

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof coursesPageActions>
type ThunkType = BaseThunkType<ActionTypes>

export const coursesPageReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch(action.type) {
    case SET_COURSES: {
      return {...state, valutes: action.payload}
    }

    case SET_COURSES_DATE: {
      return {...state, date: action.payload}
    }

    case CLEAR_COURSES: {
      return {...state, valutes: {}}
    }

    case SET_IS_FETCHING: {
      console.log('isFetch')
      return {...state, isFetching: action.isFetching}
    }
    default: 
      return {...state}
  }
}


//-----------------------------------------------Thunks------------------------------------------


export const getCourses =  (selectedDate:string = ''):ThunkType => {
  return async (dispatch, getState) => {
    const data = await coursesApi.getCourses(selectedDate)
    dispatch(coursesPageActions.setIsFetching(true))
    if(!!data) {
      dispatch(coursesPageActions.setCoursesDate(data.Date))
      dispatch(coursesPageActions.setCourses(data.Valute))
    } else {
      console.error('No data!')
      dispatch(coursesPageActions.clearCourses())
      //@ts-ignore
      window.M.toast({html: 'Данных нет'})
    }
    dispatch(coursesPageActions.setIsFetching(false))
  }
}




