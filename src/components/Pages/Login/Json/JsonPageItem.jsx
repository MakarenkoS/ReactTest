import React from 'react'
import classes from './JsonPage.module.css'

export const JsonPageItem = ({id, title}) => {
  return (
    <p className={classes.item}>
      <label className={classes.checkbox}>
        <input type="checkbox" />
        <span>
        <strong>{id}</strong> {title}
        </span>
      </label>
      
      <a className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</a>
    </p>
  )
}