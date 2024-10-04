import React from 'react';
import { Nav } from 'react-bootstrap';
import HomeLink from '../atoms/HomeLink';
import LoginLink from '../atoms/LoginLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <Nav className="flex-column bg-light sidebar">
      <HomeLink />
      <LoginLink />
      {/* Si necesitas un enlace de registro, crea un componente RegisterLink similar */}
    </Nav>
  );
};

export default Navbar;
