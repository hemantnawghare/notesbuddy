import React from 'react';
import './Sidebar.css';
import { IoSunny } from "react-icons/io5";
import { FaUpload, FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { CiChat1 } from 'react-icons/ci';
import { LuBrain } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  // Sidebar options array for dynamic rendering
  const sidebarOptions = [
    { path: '/home', icon: <FaHome />, label: 'Home' },
    { path: '/upload', icon: <FaUpload />, label: 'Upload' },
    { path: '/about', icon: <FcAbout />, label: 'About' },
    { path: '/chat', icon: <CiChat1 />, label: 'Chat' },
    { path: '/brain', icon: <LuBrain />, label: 'Brain' },
    { path: '/toggle', icon: <IoSunny />, label: 'theme' }
  ];

  return (
    <aside className="sidebar">
      <ul className="sidebar-options">
        {sidebarOptions.map((option, index) => (
          <NavLink
            key={index}
            to={option.path}
            className="sidebar-option"
            activeClassName="active" // React Router v6 compatibility
          >
            {option.icon}
            <p>{option.label}</p>
          </NavLink>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
