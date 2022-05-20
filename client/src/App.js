import React, { createContext, useReducer, useEffect, useContext } from 'react'
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Courses from './components/Courses'
import Register from './components/Register'
import Login from './components/Login'
import Logout from './components/Logout'
import Error from './components/Error'
import Onecourse from './components/Onecourse'


import { UserContext } from './components/UserContextProvider'

  

const App = () => {
  const {state, dispatch} = useContext(UserContext);


  return (
    
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/courses/:id' element={<Onecourse />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/*' element={<Error />} />
        </Routes>   
    </>
  )
}

export default App