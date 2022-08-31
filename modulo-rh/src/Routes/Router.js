import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login/Login'
import Users from '../Pages/Users/Users'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/users' element={<Users />} />                
            </Routes>
        </BrowserRouter>
    )
}
export default Router