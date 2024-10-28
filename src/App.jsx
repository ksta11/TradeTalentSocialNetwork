import { Routes, Route } from 'react-router-dom';
import LayoutWithSidebar from './components/pages/LayoutNavbar';
import { Home, Login, Register,Profile, Chat, Video } from './components/pages';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/video" element={
          <LayoutWithSidebar>
          <Video />
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
        }/>
        {/* Agrega aquí otras rutas que requieran la barra lateral */}
        {/* Por ejemplo:
        <Route path="/dashboard" element={
          <LayoutWithSidebar>
            <Dashboard />
          </LayoutWithSidebar>
        } /> */}
      </Routes>
    </>
  );
}

export default App;
