// Functions and Components
import React from 'react'
import { Route, Routes } from 'react-router-dom'

// Routes
import Home from '../views/Home'
import Login from '../views/Auth/Login'

function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    )
}

export default Router
