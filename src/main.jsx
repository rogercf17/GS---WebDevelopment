import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Educativo from './Pages/Educativo.jsx'
import Sobre from './Pages/Sobre.jsx'
import Calculadora from './Pages/Calculadora.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {index:true, element: <Home />},
      {path:'/educativo', element: <Educativo />},
      {path:'/sobre', element: <Sobre />},
      {path:'/calculadora', element: <Calculadora />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
