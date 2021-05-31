import 'materialize-css';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AppStateType } from './Redux/store';
import { useRoutes } from './Routes';

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
