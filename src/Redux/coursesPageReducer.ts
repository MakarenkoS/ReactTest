import { coursesApi } from "../api/api"
import { coursesPageActions } from "./actions"
import { BaseThunkType, InferActionsTypes } from "./store"
import { SET_COURSES, SET_COURSES_DATE, Valutes } from "./types"



export const initialState = {
  date: '',
  valutes: {} as Valutes
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


    default: 
      return {...state}
  }
}


//-----------------------------------------------Thunks------------------------------------------


export const getCourses =  ():ThunkType => {
  return async (dispatch, getState) => {
    const data = await coursesApi.getCourses()
    dispatch(coursesPageActions.setCoursesDate(data.Date))
    dispatch(coursesPageActions.setCourses(data.Valute))

  }
}




