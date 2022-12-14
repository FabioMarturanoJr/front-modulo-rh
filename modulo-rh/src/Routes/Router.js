import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Users from '../Pages/Users/Users'
import CreateUser from '../Pages/CreateUser/CreateUser'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/users' element={<Users />} />                
                <Route path='/create-user' element={<CreateUser />} />                
            </Routes>
        </BrowserRouter>
    )
}
export default Router