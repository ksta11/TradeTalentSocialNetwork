import React from 'react';
import { Nav } from 'react-bootstrap';
import HomeLink from '../atoms/HomeLink';
import LoginLink from '../atoms/LoginLink';
import RegisterLink from '../atoms/RegisterLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <Nav className="flex-column bg-light sidebar">
            <HomeLink />
            <LoginLink />
            <RegisterLink />
            {/* Si necesitas un enlace de registro, crea un componente RegisterLink similar */}
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
