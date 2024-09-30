import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'



import { Home, Login, Account, Register } from './pages'

import 'bootstrap/dist/css/bootstrap-grid.min.css'
import App from './App.jsx'



const router = createBrowserRouter([
  { path: "/", element: <Home />},
  { path: "/account", element: <Account />}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <RouterProvider router={router} />
  </StrictMode>,
)
