import React from 'react'
import './Users.css';
import { Link } from 'react-router-dom';

const Users = () => {
  return (
    <div>
      <h1>
        Users
      </h1>
      <Link to='/'>Login</Link>
    </div>
  )
};

export default Users;
