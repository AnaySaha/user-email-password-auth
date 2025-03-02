import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/Root/Root.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'

const router = createBrowserRouter([
  {
  path: "/",
  element: <Root/>
  children: [
    {
      path: '/',
      element: <Home></Home>
    },

    {
      path: '/login',
      element: <Login></Login>
    },

    {
      path: '/register',
      element: <Register></Register>
    }
  ]
  }
  ]);

  
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,

)
