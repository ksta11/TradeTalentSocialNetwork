import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LoginLink = () => (
  <Nav.Item>
    <Nav.Link as={Link} to="/login">Login</Nav.Link>
  </Nav.Item>
);

export default LoginLink;
