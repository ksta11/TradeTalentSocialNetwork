import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home, Login } from './components/pages'  // Importa desde el archivo index.js

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import App from './App.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/login", element: <Login />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
