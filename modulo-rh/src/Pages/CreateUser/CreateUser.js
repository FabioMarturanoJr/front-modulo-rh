import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './CreateUser.css';
import api from '../../Services/Api';
import { goTo } from '../../Routes/Coordinator';

const CreateUser = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)

  const savaUser = (event) => {
    event.preventDefault()
    console.log(email)
    console.log(password)

    api
    .post('/user', {
      email,
      password
    })
    .then(() => setRedirect(true))
    .catch((err) => {
      console.error("Error" + err)
    })
  }

  return (
    <div>
      { redirect && goTo('') }

      <form onSubmit={savaUser}>
        <input type='text' 
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Usuario'
        />
        <input type='text'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Senha'
        />
        <button>Cadastro</button>
      </form>
      <Link to='/'>Login</Link>
    </div>
  )
};

export default CreateUser
