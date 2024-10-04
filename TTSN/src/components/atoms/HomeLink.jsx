import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeLink = () => (
  <Nav.Item>
    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
  </Nav.Item>
);

export default HomeLink;
