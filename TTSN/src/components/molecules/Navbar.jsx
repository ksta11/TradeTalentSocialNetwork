import React from 'react';
import { Nav } from 'react-bootstrap';
import HomeLink from '../atoms/HomeLink';
import LoginLink from '../atoms/LoginLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <Nav className="flex-column bg-light sidebar">
      <HomeLink to="/">Inicio</HomeLink>
      <LoginLink to="/login">Login</LoginLink>
      <LoginLink to="/register">Register</LoginLink>
    </Nav>
  );
};

export default Navbar;
