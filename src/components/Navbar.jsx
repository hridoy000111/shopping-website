import { NavLink, Link, useLocation } from "react-router-dom";
import { CiUser, CiLogin, CiShoppingCart, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import { menuContext } from "./Context/menuContext";
import { useCart } from "./Context/CartContext";

const Navbar = () => {
  const location = useLocation();
  const { menuOpen, setMenuOpen } = useContext(menuContext);
  const { cartItems } = useCart();
  return (
    <nav className="bg-neutral-50   py-2 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
        <h2
          style={{ textShadow: "1px 1px 2px blue" }}
          className="text-red-600 font-bold text-xl md:text-3xl cursor-pointer hover:text-yellow-500 hover:scale-105"
        >
          NovaShop
        </h2>
        <div className="hidden lg:flex space-x-4 text-base text-gray-500 font-josefin  ">
          <NavLink
            to="/"
            className={({ isActive }) => ` hover:text-red-500
             ${isActive ? "text-black font-bold" : "text-gray-500"}
           `}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => ` hover:text-red-500
             ${isActive ? "text-black font-bold" : "text-gray-500"}
           `}
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => ` hover:text-red-500
             ${isActive ? "text-black font-bold" : "text-gray-500"}
           `}
          >
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => ` hover:text-red-500
             ${isActive ? "text-black font-bold" : "text-gray-500"}
           `}
          >
            Contact
          </NavLink>
        </div>
        <div className="hidden lg:flex space-x-4  ">
          <Link
            to="/login"
            className={`flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded ${
              location.pathname === "/login" ? "bg-gray-600  text-white" : ""
            } `}
          >
            <CiLogin />
            <span>Login</span>
          </Link>
          <Link
            to="/register"
            className={`flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded ${
              location.pathname === "/register" ? "bg-gray-600  text-white" : ""
            } `}
          >
            <CiUser />
            <span>Register</span>
          </Link>
          <Link
            className={`flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded ${
              location.pathname === "/cart" ? "bg-gray-600  text-white" : ""
            } `}
            to="/cart"
          >
            <CiShoppingCart />
            <span>
              Cart
              {cartItems.length > 0 && <span>( {cartItems.length})</span>}
            </span>
          </Link>
        </div>
        {/* small device menu icon*/}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose className="w-6 h-6 text-gray-800"></IoMdClose>
            ) : (
              <CiMenuBurger className="w-6 h-6 text-gray-800"></CiMenuBurger>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className={`lg:hidden flex flex-col items-center space-y-3 font-josefin bg-neutral-50 overflow-hidden transition-all duration-500 ease-in-out transform origin-top ${
            menuOpen
              ? "max-h-96 opacity-100 scale-y-100"
              : "max-h-0 opacity-0 scale-y-0"
          }`}
        >
          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500"
            to="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500"
            to="/product"
          >
            Products
          </Link>
          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500"
            to="/about"
          >
            About
          </Link>

          <Link
            onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500"
            to="/contact"
          >
            Contact
          </Link>

          <div className="flex justify-center  gap-4  ">
            <Link
              onClick={() => setMenuOpen(false)}
              to="/login"
              className="flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded "
            >
              <CiLogin />
              <span>Login</span>
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              to="/register"
              className="flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded "
            >
              <CiUser />
              <span>Register</span>
            </Link>
            <Link
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded "
              to="/cart"
            >
              <CiShoppingCart />
              <span>
                Cart
                {cartItems.length > 0 && <span>( {cartItems.length})</span>}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
