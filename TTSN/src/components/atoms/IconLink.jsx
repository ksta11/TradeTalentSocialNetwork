import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IconLink = ({ icon, to }) => (
    <Nav.Item>  
        <Nav.Link as={Link} to={to}>
            <i className={icon} aria-hidden="true"></i>
        </Nav.Link>
    </Nav.Item>
);

export default IconLink;

