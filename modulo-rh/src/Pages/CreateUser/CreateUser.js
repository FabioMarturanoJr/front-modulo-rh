import React, { useState } from 'react'
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
      console.error(err)
      alert(err)
    })
  }

  return (
    <div className='container'>
      { redirect && goTo('') }

      <form>
        <input type='text' 
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Usuario'
        />
        <input type='text'
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Senha'
        />
        <div className='buttons'>
          <button 
            className='cancel'
            type="cancel"
            onClick={() => setRedirect(true)}> Cancelar </button>
          <button
            className='submit'
            type="submit"
            onClick={savaUser}>Salvar</button>
        </div>
      </form>
    </div>
  )
};

export default CreateUser
