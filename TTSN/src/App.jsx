import './App.css'
import Navbar from './components/molecules/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './components/pages';  // Importa desde el archivo index.js
import { Login } from './components/pages';  // Importa desde el archivo index.js


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
