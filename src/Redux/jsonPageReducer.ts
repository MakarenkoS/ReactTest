import { postApi } from "../api/api"
import { jsonPageActions } from "./actions"
import { SET_DATA, JsonDataType, SET_FILTER, CLEAR_FILTER } from "./types"
import { InferActionsTypes, BaseThunkType } from "./store"

export const initialState = {
  jsonArray: [] as Array<JsonDataType>,
  portionSize: 5,
  portionCount: 16,
  filter: ''
}

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof jsonPageActions>
type ThunkType = BaseThunkType<ActionTypes>

export const jsonPageReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch(action.type) {
    case SET_DATA: {
      return {...state, jsonArray: action.payload }
    }
    case SET_FILTER: {
      return {...state, filter: action.filterString}
    }
    case CLEAR_FILTER: {
      return {...state, filter: ''}
    }

    default: 
      return {...state}
  }
}


//-----------------------------------------------Thunks------------------------------------------


export const getPosts =  ():ThunkType => {
  return async (dispatch, getState) => {
    const data: Array<JsonDataType>= await postApi.getPosts(getState().jsonPage.portionCount)
    console.log(data)
    dispatch(jsonPageActions.setData(data))
  }
}




