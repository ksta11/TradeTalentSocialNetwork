import React from 'react';
import { Nav } from 'react-bootstrap';
import IconLink from '../atoms/IconLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container-fluid sidebar-container'>
      <div className='row h-100'>
        <div className='col-12 p-0'>
          <Nav className="flex-column bg-light sidebar h-100 justify-content-center align-items-center">
            <IconLink icon="bi-house-door" to="/" />
            <IconLink icon="bi-person" to="/login" />
            <IconLink icon="bi-person-plus" to="/register" />
            {/* Si necesitas un enlace de registro, crea un componente RegisterLink similar */}
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
