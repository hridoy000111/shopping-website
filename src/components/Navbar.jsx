
import { Link } from 'react-router-dom';
import { CiUser ,CiLogin,CiShoppingCart,CiMenuBurger} from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useContext } from 'react';
import { menuContext } from '../components/menuContext';

const Navbar = () => {
     const {menuOpen,setMenuOpen}=useContext(menuContext);
    return (
       
            <nav className="bg-neutral-50  shadow py-6 fixed top-0 left-0 right-0 z-50">
               
                <div className="container mx-auto flex justify-between items-center px-4 md:px-8 py-3">
                    <h2 style={{ textShadow: '1px 1px 2px blue' }} className="text-red-600 font-bold text-3xl cursor-pointer hover:text-yellow-500 hover:scale-105"><span style={{ textShadow: '1px 1px 1px red' }} className='mr-2 text-blue-700 hover:text-green-400'>Shopping</span>website</h2>
                <div className="hidden lg:flex space-x-4 text-base text-gray-500 font-josefin ">
                  <Link className='hover:text-red-500' to="/">Home</Link>
                  <Link className='hover:text-red-500' to="/about">About</Link>
                  <Link className='hover:text-red-500' to="/products">Products</Link>
                 
                  <Link className='hover:text-red-500' to="/contact">Contact</Link>
                </div>
                <div className="hidden lg:flex space-x-4  ">
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiLogin /><span>Login</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiUser /><span>Register</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiShoppingCart/><span>Cart</span> </button>
                 
                </div>
                {/* small device menu icon*/ }
                <div className="lg:hidden">
                    <button onClick={()=>setMenuOpen(!menuOpen)}>
                        {
                            menuOpen?<IoMdClose className="w-6 h-6 text-gray-800"></IoMdClose>:<CiMenuBurger className="w-6 h-6 text-gray-800"></CiMenuBurger>
                        }
                    </button>

                </div>
                </div>

                {
                    menuOpen && (
                        <div className={`lg:hidden flex flex-col space-y-3   font-josefin bg-neutral-50
      overflow-hidden transition-all duration-500 ease-in-out
      transform origin-top
      ${menuOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"}
      `}>
                  <Link  onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500"  to="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500" to="/products">Products</Link>
                  <Link onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500" to="/about">About</Link>
                  
                 
                  <Link onClick={() => setMenuOpen(false)}
            className="block text-gray-700 hover:text-red-500" to="/contact">Contact</Link>

             <div className="flex justify-center  gap-4  ">
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiLogin /><span>Login</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiUser /><span>Register</span> </button>
                    <button className='flex items-center gap-2 border  border-black px-3 py-1 hover:bg-gray-400 rounded '> <CiShoppingCart/><span>Cart</span> </button>
                 
                </div>
                </div>
                    )
                }
            </nav>
        
    );
};

export default Navbar;