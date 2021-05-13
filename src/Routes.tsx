import { Route, Switch, Redirect } from 'react-router-dom';
import {LoginPage} from './components/Pages/Login/LoginPage'
import { JsonPage } from './components/Pages/Login/Json/JsonPage';
import React from 'react';



export const useRoutes = (isAuth: boolean ) => {

  if (isAuth) {
    return (
      <Switch>
        <Route path='/Json'><JsonPage/> </Route>
        <Route path='/Courses'><div>Courses</div></Route>
        <Route path='/Other'><div>Other</div></Route>
        <Redirect to="/Json"/>
      </Switch>
    )
  }
  return (
    <Switch> 
      <Route path='/login'><LoginPage/> </Route>
      <Redirect to='/login'></Redirect>
    </Switch>
  )
} 


