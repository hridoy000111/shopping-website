import { StrictMode } from "react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import MainLayout from "./layout/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import MenuProvider from "./components/MenuProvider.jsx";
import { CartProvider } from "./components/CartContext.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import CheckOut from "./pages/CheckOut.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/checkout",
        element: <CheckOut></CheckOut>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MenuProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </MenuProvider>
  </React.StrictMode>
);
