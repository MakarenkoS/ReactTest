import './App.css';
import 'materialize-css'
import { useRoutes } from './Routes';
import { Navbar } from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { AppStateType } from './Redux/store';
import React from 'react'

export const App = () => {
  const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth)
  const routes = useRoutes(isAuth)
  return (
    <div className="App container">

      {isAuth && <Navbar isAuth= {isAuth} />}
      {routes}

    </div>
  )
}
