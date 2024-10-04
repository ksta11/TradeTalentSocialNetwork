import React from 'react';
import Navbar from '../molecules/Navbar';
import './LayoutNavbar.css';

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className="layout-with-sidebar">
      <Navbar />
      <div className="main-content-wrapper">
        <main className="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;

