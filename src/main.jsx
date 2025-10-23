import { StrictMode } from 'react'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import MainLayout from './layout/MainLayout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MenuProvider from './components/MenuProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        
        path:"/",
        element:<Home></Home>,

      
    },
       {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <RouterProvider router={router} />
    </MenuProvider>
  </React.StrictMode>
);