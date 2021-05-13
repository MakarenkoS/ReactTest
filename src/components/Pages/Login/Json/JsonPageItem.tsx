import React from 'react'
import classes from './JsonPage.module.css'

type PropsType = {
  id: number
  title: string
}

export const JsonPageItem: React.FC<PropsType> = ({id, title}) => {
  return (
    <p className={classes.item}>
      <label className={classes.checkbox}>
        <input type="checkbox" />
        <span>
        <strong>{id}</strong> {title}
        </span>
      </label>
      
      <button className="waves-effect waves-light btn"><i className="material-icons left">cloud</i>button</button>
    </p>
  )
}