import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => (
  <Nav.Item>
    <Nav.Link as={Link} to={to}>{children}</Nav.Link>
  </Nav.Item>
);

export default NavLink;
