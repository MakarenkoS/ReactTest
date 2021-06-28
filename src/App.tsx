import 'materialize-css';
import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { AppStateType } from './Redux/store';
import { useRoutes } from './Routes';

export const App = () => {


  // -----------------------------Init material listener-----------------

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    //@ts-ignore
    var instances = M.Collapsible.init(elems, {})
  })

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
     //@ts-ignore
    var instances = M.Sidenav.init(elems, {});
  });

  //---------------------------------------------------------------------

  const isAuth = useSelector( (state: AppStateType) => state.auth.isAuth)
  const routes = useRoutes(isAuth)
  return (
    <div className="App container">

      {isAuth && <Navbar isAuth= {isAuth} />}
      {routes}

    </div>
  )
}
