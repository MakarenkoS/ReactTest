import { authActions } from "./actions"
import { authReducer } from "./authReducer"

const state = {
  isAuth: false,
}

it('Property isAuth should be switched to TRUE', () => {
  const action = authActions.login()
  let newState = authReducer(state, action) 

  expect(newState.isAuth).toBeTruthy() 
})

it('Property isAuth should be switched to FALSE', () => {
  const action = authActions.logout()
  let newState = authReducer(state, action) 

  expect(newState.isAuth).toBeFalsy() 
})