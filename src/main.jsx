import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Contacts from './pages/Contacts.jsx'
import Projects from './pages/Projects.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/about',
    element:<About/>
  },
  {
    path:'/projects',
    element:<Projects/>
  },
  {
    path:'/contacts',
    element:<Contacts/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>
)

