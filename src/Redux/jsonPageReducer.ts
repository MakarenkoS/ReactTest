import { postApi } from "../api/api"
import { jsonPageActions } from "./actions"
import { SET_DATA, JsonDataType } from "./types"
import { InferActionsTypes, BaseThunkType } from "./store"

export const initialState = {
  jsonArray: [] as Array<JsonDataType>,
  portionSize: 5,
  portionCount: 15
}

type InitialStateType = typeof initialState
type ActionTypes = InferActionsTypes<typeof jsonPageActions>
type ThunkType = BaseThunkType<ActionTypes>

export const jsonPageReducer = (state = initialState, action: ActionTypes): InitialStateType => {
  switch(action.type) {
    case SET_DATA: {
      return {...state, jsonArray: action.payload }
    }
    default: 
      return {...state}
  }
}


//-----------------------------------------------Thunks------------------------------------------


export const getPosts =  ():ThunkType => {
  return async (dispatch, getState) => {
    const data: Array<JsonDataType>= await postApi.getPosts(getState().jsonPage.portionCount)
    dispatch(jsonPageActions.setData(data))
  }
}


