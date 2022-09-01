import React, { useEffect, useState } from 'react'
import './Users.css';
import { Link } from 'react-router-dom';
import api from '../../Services/Api';

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    api
    .get('/user')
    .then((resp) => setUsers(resp.data))
    .catch((err) => {
      console.error("Error" + err)
    })
  }, [])

  const showUser = (user) => {
    console.log(user)
  }

  return (
    <div>
      {users.map((user) => 
        <li key={user.id}>
          {user.email} 
          <button key={user.id} onClick={() => showUser(user)}>Do</button>
        </li>
      )}
      <Link to='/'>Login</Link>
    </div>
  )
};

export default Users
