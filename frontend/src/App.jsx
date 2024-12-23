import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import Navbar from './Components/Navbar/Navbar';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Components/Home/Home';
import './index.css';
import Contactus from './Components/Contactus/Contactus';
import Upload from './Components/Upload/Upload';
import Chat from './Components/Chat/Chat';
import Quiz from './Components/Quiz/Quiz';
import Semisters from './Components/Semisters/Semisters';
import SemesterDetails from './Components/SemesterDetails/SemesterDetails';

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
      </div>
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<Contactus />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/:courseName" element={<Semisters />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
