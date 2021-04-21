import React from 'react'
import classes from './JsonPage.module.css'

export const JsonPage = () => {
  return (
    <div>

      <nav>
        <div className="nav-wrapper  grey lighten-1">
          <form>
            <div className="input-field">
              <input id="search" type="search" required></input>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>

      <p className={classes.item}>
        Test Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi libero quam lab
        <label className={classes.checkbox}>
          <input type="checkbox" />
          <span></span>
        </label>
        <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
      </p>

    </div>
  )
}