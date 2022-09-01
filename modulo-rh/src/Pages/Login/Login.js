import React, { useState } from 'react'
import { goTo } from '../../Routes/Coordinator';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  var [redirect, setRedirect] = useState(false)

  return (
    <div>
      {
        redirect && goTo('users')
      }
      <h1>
        Login
      </h1>
      <button onClick={() => setRedirect(true)}>
        Users
      </button>
      <Link to='/create-user'>Cadastrar Usuario</Link>
    </div>
  )
}

export default Login
