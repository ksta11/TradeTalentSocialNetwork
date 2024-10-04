import { Routes, Route } from 'react-router-dom';
import LayoutWithSidebar from './components/pages/LayoutNavbar';
import { Home, Login, Register } from './components/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={
          <LayoutWithSidebar>
            <Home />
          </LayoutWithSidebar>
        } />
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
