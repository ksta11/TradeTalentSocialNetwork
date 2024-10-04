import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RegisterLink = () => (
  <Nav.Item>
    <Nav.Link as={Link} to="/register">Register</Nav.Link>
  </Nav.Item>
);

export default RegisterLink;