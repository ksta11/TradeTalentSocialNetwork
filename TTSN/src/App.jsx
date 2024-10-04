import './App.css'
import Navbar from './components/molecules/Navbar'
import Header from './components/molecules/Header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Login } from './components/pages';  

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="content-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  )
}

export default App
