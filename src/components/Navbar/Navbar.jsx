import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'
import { useDispatch } from 'react-redux'
import { logout } from '../../Redux/actions'


export let Navbar = (props) => {

  const dispatch = useDispatch()

  function userLogout() {
    dispatch(logout())
  }

  return (
    <nav>
      <div className="nav-wrapper blue darken-4 ">
        <span onClick={userLogout} className={`brand-logo right ${classes.icon}`}> <i className="large material-icons">directions_run</i></span>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li><NavLink to="/Json"> Get JSON </NavLink></li>
          <li><NavLink to="/Courses">Get Courses </NavLink></li>
          <li><NavLink to="/Other">Other </NavLink></li>
        </ul>
      </div>
    </nav>
  )
} 
