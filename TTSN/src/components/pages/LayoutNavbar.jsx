import React from 'react';
import Navbar from '../molecules/Navbar';
import './LayoutNavbar.css';

const LayoutWithSidebar = ({ children }) => {
  return (
    <div className='container-fluid'>
      <div className="row layout-with-sidebar">
        <div className="col-1 p-0 fixed-nav">
          <Navbar />
        </div>
        <div className="col-11 main-content-wrapper">
          <main className="main-content">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;

