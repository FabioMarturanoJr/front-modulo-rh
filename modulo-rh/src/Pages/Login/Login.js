import React, { useState } from 'react'
import './Login.css';
import { goTo } from '../../Routes/Coordinator';

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
    </div>
  )
}

export default Login;
