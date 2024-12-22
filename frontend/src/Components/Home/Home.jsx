import React from 'react'
import Corousal from '../corosoul/corousal'
import './Home.css'
import Courses from '../courses/courses'
import Contactus from '../Contactus/Contactus'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div className='app'>
        <Corousal />
        <h1 className='heading'>Courses</h1>
        <Courses />
        <Footer />
    </div>
  )
}

export default Home