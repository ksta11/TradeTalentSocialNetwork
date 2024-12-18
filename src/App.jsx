import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LayoutWithSidebar from './components/pages/LayoutNavbar';
import IconLink from './components/atoms/IconLink';
import { Home, Login, Register, Profile, Chat, Admin, AllMembers, Notifications, PasswordRecovery, Survey, UserPosts, VideoCall} from './components/pages';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={
          <LayoutWithSidebar>
            <Admin />
          </LayoutWithSidebar>
        } />
        <Route path="/AllMembers" element={
          <LayoutWithSidebar>
            <AllMembers />
          </LayoutWithSidebar>
        } />
        <Route path="/Notifications" element={
          <LayoutWithSidebar>
            <Notifications />
          </LayoutWithSidebar>
        } />
        <Route path="/" element={
          <LayoutWithSidebar>
            <Home />
          </LayoutWithSidebar>
        } />
        <Route path="/profile" element={
          <LayoutWithSidebar>
            <Profile />
          </LayoutWithSidebar>
        } />
        <Route path="/chat" element={
          <LayoutWithSidebar>
            <Chat />
          </LayoutWithSidebar>
        } />
        <Route path="/videocall" element={
          <LayoutWithSidebar>
            <VideoCall otherPersonName="Juan Pérez" />
          </LayoutWithSidebar>
        } />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route path="/survey" element={<Survey />} />
        <Route path="/user-posts" element={
          <LayoutWithSidebar>
          <UserPosts/>
        </LayoutWithSidebar>
          } />

      </Routes>
      
      <div className="icon-container">
        <IconLink icon="bi bi-emoji-wink-fill icon-large" to="/survey" tooltipText="Encuesta" />
      </div>
    </>
  );
}

export default App;
