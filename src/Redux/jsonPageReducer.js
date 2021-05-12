import { postApi } from "../api/api"
import { setData } from "./actions"
import { SET_DATA } from "./types"

export const initialState = {
  posts: [],
  portionSize: 5,
  portionCount: 15
}

export const jsonPageReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DATA: {
      return {...state, posts: action.payload }
    }
    default: 
      return {...state}
  }
}


//-----------------------------------------------Thunks------------------------------------------


export const getPosts =  () => {
  return async (dispatch, getState) => {
    const data = await postApi.getPosts(getState().jsonPage.portionCount)
    dispatch(setData(data))
  }

}


