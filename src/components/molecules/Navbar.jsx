import { Nav } from 'react-bootstrap';
import IconLink from '../atoms/IconLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='container-fluid sidebar-container'>
      <div className='row h-100'>
        <div className='col-12 p-0'>
          <Nav className="flex-column sidebar h-100 justify-content-center align-items-center">
            <IconLink icon="bi-house-door" to="/" tooltipText="Home" />
            <IconLink icon="bi-person" to="/login"  tooltipText="Login" />
            <IconLink icon="bi-person-plus" to="/register"  tooltipText="Register" />
            <IconLink icon="bi-file-person" to="/profile"  tooltipText="Profile"/>
            <IconLink icon="bi-chat-dots" to="/chat" tooltipText="Chat"/>
            <IconLink icon="bi-shield-lock" to="/admin" tooltipText="Admin"/>
            <IconLink icon="bi bi-globe2" to="/AllMembers" tooltipText="All Members"/>
            <IconLink icon="bi bi-bell" to="/Notifications" tooltipText="Notifications"/>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
