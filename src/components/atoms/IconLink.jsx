import { Nav, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IconLink = ({ icon, to, tooltipText }) => (
    <OverlayTrigger
        placement="right"
        overlay={<Tooltip id={`tooltip-${icon}`}>{tooltipText}</Tooltip>}
    >
        <Nav.Item>  
            <Nav.Link as={Link} to={to} >
                <i className={icon} aria-hidden="true"></i>
            </Nav.Link>
        </Nav.Item>
    </OverlayTrigger>
);

export default IconLink;
