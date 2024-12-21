import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Components/Login/Login'
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/sidebar'


const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
    </div>
    <hr />
    <Sidebar />
    </>
  )
}

export default App