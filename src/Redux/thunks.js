import {login} from './actions'

export const authorizeUser = (data) => {
  return dispatch => {
    if (data.name === 'I') {
      dispatch(login())
    } else {
      window.M.toast({html: "Incorrect name or password"})
    }
  
  }
}