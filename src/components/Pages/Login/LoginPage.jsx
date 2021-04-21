import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { authorizeUser } from '../../../Redux/thunks'
import classes from './LoginPage.module.css'


export let LoginPage = (props) => {

  const changeHandler = e => {
    console.log(field.name)
    setField({ ...field, [e.target.name]: e.target.value })
  }

  const [field, setField] = useState({
    name: '',
    password: ''
  })


  useEffect(() => {
    window.M.updateTextFields()
  }, [])


  function LoginUser() {
    console.log('thunk', field.name)
    props.authorizeUser(field)
  }

  const cn = "card blue darken-3 " + classes.login
  return (
    <div className={cn} >
      <div className="card-content white-text">

        <div className="row">
          <div className="input-field col s6">
            <input id="input_name" type="text" name="name" placeholder="Enter login" data-length="10"
              value={field.name} onChange={changeHandler}
            >

            </input>
            <label htmlFor="input_name">Login</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <input id="input_password" type="text" name="password" placeholder="Enter password" data-length="10"></input>
            <label htmlFor="input_password">Password</label>
          </div>
        </div>
        <button
          className="btn yellow darken-4"
          onClick={LoginUser}
        >
          Войти
        </button>

      </div>
    </div>
  )
}



let mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth
  }
}


LoginPage = connect(mapStateToProps, { authorizeUser })(LoginPage)