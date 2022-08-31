import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>
        Login
      </h1>
      <Link to='/users'>Users</Link>
    </div>
  )
}

export default Login;
